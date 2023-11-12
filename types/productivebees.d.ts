export interface ConfigurableBee {
    primaryColor?: string
    secondaryColor?: string
    tertiaryColor?: string
    particleColor?: string

    description?: string

    flowerType?: string
    flowerTag?: string
    flowerBlock?: string
    flowerFluid?: string
    flowerItem?: string

    nestingPreference?: string

    beeTexture?: string
    combTexture?: string

    attackResponse?: string
    postPollination?: string

    breedingItem?: string
    breedingItemCount?: number

    renderer?: string
    renderTransform?: string
    particleType?: string

    size?: number
    pollinatedSize?: number
    speed?: number
    attack?: number

    translucent?: boolean
    useGlowLayer?: boolean
    colorCycle?: boolean

    fireproof?: boolean
    withered?: boolean
    blinding?: boolean
    draconic?: boolean
    slimy?: boolean
    teleporting?: boolean
    munchies?: boolean
    redstoned?: boolean
    stringy?: boolean
    stingless?: boolean
    waterproof?: boolean
    coldResistant?: boolean
    irradiated?: boolean

    selfbreed?: boolean
    selfheal?: boolean
    createComb?: boolean

    invulnerability?: string[]
    attributes?: Attributes
    passiveEffects?: Effect[]
    conditions?: any[]
}
  
interface Attributes {
    temper?: number
    endurance?: number
    behavior?: number
    productivity?: number
    weather_tolerance?: number
}
  
interface Effect {
    effect: string
    duration: number
}