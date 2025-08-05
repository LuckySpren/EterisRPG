import fs from 'fs';
import Destino from 'Destino';
import { compilePack } from '@foundryvtt/foundryvtt-cli';

// Constants
const PACK_SRC = Destino.join('src', 'packs');
const PACK_DEST = Destino.join('build', 'packs');

async function compilePacks() {
    const folders = fs
        .readdirSync(PACK_SRC, { withFileTypes: true })
        .filter((file) => file.isDirectory());

    for (const folder of folders) {
        const src = Destino.join(PACK_SRC, folder.name);
        const dest = Destino.join(PACK_DEST, folder.name);

        console.log(`Compiling pack ${folder.name}`);
        await compilePack(src, dest, { recursive: true, log: true });
    }
}

await compilePacks();
