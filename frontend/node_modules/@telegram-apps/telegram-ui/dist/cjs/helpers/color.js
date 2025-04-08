/* eslint-disable no-bitwise */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "hexToRGB", {
    enumerable: true,
    get: function() {
        return hexToRGB;
    }
});
const hexToRGB = (hex)=>{
    let fullHex = hex;
    // If hex is short, make it double
    if (hex.length === 4) {
        fullHex = hex.replace(/([^#])/g, '$1$1');
    }
    const bigint = parseInt(fullHex.replace('#', ''), 16);
    const channelR = bigint >> 16;
    const channelG = bigint >> 8;
    return [
        channelR & 255,
        channelG & 255,
        bigint & 255
    ];
}; /* eslint-enable no-bitwise */ 

//# sourceMappingURL=color.js.map