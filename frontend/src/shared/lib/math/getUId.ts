export function getUId() {
    return Date.now() + +Math.random().toFixed(6) * 1000000;
}
