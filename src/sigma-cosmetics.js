/** @param {NS} ns */
export async function main(ns) {
    while (true) {
        await ns.grow('sigma-cosmetics');
        await ns.weaken('sigma-cosmetics');
        await ns.hack('sigma-cosmetics');
    }

}