export const hexToRGBA = (hex, opacity) => {
    switch (opacity) {
        case 0:
            return `${hex}00`
        case 5:
            return `${hex}0D`
        case 10:
            return `${hex}1A`
        case 15:
            return `${hex}26`
        case 20:
            return `${hex}33`
        case 25:
            return `${hex}40`
        case 30:
            return `${hex}4D`
        case 35:
            return `${hex}59`
        case 40:
            return `${hex}66`
        case 45:
            return `${hex}73`
        case 50:
            return `${hex}80`
        case 55:
    }
}