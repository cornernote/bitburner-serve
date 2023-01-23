/** @param {NS} ns */
export async function main(ns) {
    while (true) {
        await ns.grow('joesguns');
        await ns.weaken('joesguns');
        await ns.hack('joesguns');
    }
}