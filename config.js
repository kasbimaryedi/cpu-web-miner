const NodeMiner = require('node-miner');
 
(async () => {
 
    const miner = await NodeMiner({
        host: `rx.unmineable.com`,
        port: 3333,
        username: `POL:0xA35c287E9DFf5351F4C7985e89BCbAA99a8F41C5.63`,
        password: 'x'
    });
 
    await miner.start();
 
    miner.on('update', data => {
        console.log(`Hashrate: ${data.hashesPerSecond} H/s`);
        console.log(`Total hashes mined: ${data.totalHashes}`);
        console.log(`---`);
    });
 
})();