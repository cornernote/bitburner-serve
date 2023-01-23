/** @param {NS} ns */
export async function main(ns) {
    while (true) {
        await ns.grow('foodnstuff');
        await ns.weaken('foodnstuff');
        await ns.hack('foodnstuff');
    }
}