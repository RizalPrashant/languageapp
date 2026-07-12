import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'node:fs'
import path from 'node:path'

/* Dev-only companion to the in-game collision editor (press G in the
   town). The editor POSTs the edited tile grid here and we write it to
   src/data/maps/{loc}.json — the map you paint is the map that ships.
   The maps dir is excluded from the HMR watcher so saving doesn't
   reload the page mid-playtest (the running game already has the same
   grid in memory; a manual refresh re-imports the file). */
function mapSaver(): Plugin {
  return {
    name: 'kq-map-saver',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use('/__map/save', (req, res) => {
        if (req.method !== 'POST') { res.statusCode = 405; res.end('POST only'); return }
        let body = ''
        req.on('data', c => { body += c })
        req.on('end', () => {
          try {
            const { loc, tiles } = JSON.parse(body)
            if (typeof loc !== 'string' || !/^[a-z0-9_-]{1,40}$/.test(loc)) throw new Error('bad location id')
            if (!Array.isArray(tiles) || tiles.length < 1 || tiles.length > 400) throw new Error('bad tiles')
            const w = tiles[0].length
            for (const r of tiles) {
              if (typeof r !== 'string' || r.length !== w || !/^[.#~=]+$/.test(r)) throw new Error('bad row')
            }
            const dir = path.resolve(server.config.root, 'src/data/maps')
            const file = path.join(dir, `${loc}.json`)
            fs.writeFileSync(file, JSON.stringify(tiles, null, 2) + '\n')
            // the maps dir is unwatched (saving must not reload the running
            // game), so Vite never notices the change — evict its cached
            // transforms by hand (incl. the '?import' variant the browser
            // uses) or reloads keep getting the stale grid forever.
            const mods = server.moduleGraph.getModulesByFile(file)
            if (mods) for (const m of mods) server.moduleGraph.invalidateModule(m)
            res.end('ok')
          } catch (e) {
            res.statusCode = 400
            res.end(String(e))
          }
        })
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), mapSaver()],
  server: {
    port: 5173,
    host: true,
    // allow tunneling the dev server (ngrok) so friends can playtest
    allowedHosts: ['.ngrok-free.dev', '.ngrok-free.app', '.ngrok.io'],
    // saving a map from the editor must not hot-reload the session
    watch: { ignored: ['**/src/data/maps/**'] }
  }
})
