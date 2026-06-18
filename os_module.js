import os from 'node:os';
console.log("CPUS: ", os.cpus());
console.log("Total Memory: ", os.totalmem()/(1024*1024*1024), "GB");
console.log("Free Memory: ", os.freemem()/(1024*1024*1024), "GB");
console.log("Platform: ", os.platform());
console.log("Architecture: ", os.arch());
console.log("Uptime: ", os.uptime(), "seconds");
console.log("Hostname: ", os.hostname());
console.log("Network Interfaces: ", os.networkInterfaces());
console.log("User Info: ", os.userInfo());
console.log("Endianness: ", os.endianness());
console.log("Release: ", os.release());
console.log("Type: ", os.type());
console.log("Version: ", os.version());
console.log("Load Average: ", os.loadavg());
console.log("Home Directory: ", os.homedir());
console.log("Temporary Directory: ", os.tmpdir());
console.log("EOL: ", os.EOL);
console.log("Is 64-bit: ", os.arch() === 'x64');
console.log("CPU Usage: ", os.cpus().map(cpu => cpu.times));
console.log("Memory Usage: ", {
    total: os.totalmem(),
    free: os.freemem(),
    used: os.totalmem() - os.freemem()
});
console.log("Network Interfaces: ", os.networkInterfaces());
console.log("Machine: ", os.machine());