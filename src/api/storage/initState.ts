import { TStorage } from './Storage';

const initStorage: TStorage = {
  settings: {
    game: {
      cells : {
        mass: true,
        myMass: true,
        nicks: true,
        myNick: true,
        autoHideMassAndNicks: true,
        shortMass: false,
        massUpdateDelay: 1,
        skinsType: 'Custom',
        ringsType: 'Disabled',
        ringsSpinning: true,
        soakSpeed: 2,
        fadeSpeed: 40,
        oneColored: false,
        shadow: 'Only me',
        soakToEaten: true,
        nicksScale: 0.850,
        massScale: 0.625,
      },
      effects: {
        cellRemoveAnimation: 'Yue',
        cellRemoveAnimationForHiddenSpectator: false,
        spawnAnimation: 'Acimazis',
        wtfRgbMode: false
      },
      gameplay: {
        animationSpeed: 150,
        zoomSpeed: 8,
        cameraSpeed: 19,
        cameraStyle: 'Default',
        spectatorMode: 'Top one',
        viewport: 'Disabled'
      },
      minimap: {
        enabled: true,
        viewport: 'All',
        ghostCells: true,
        realPlayersCells: false,
        mass: false,
        nicks: true,
        playerPosition: true
      },
      multibox: {
        enabled: false,
        ring: true,
        changeRingColor: true,
        changeCellColor: false,
        hideOwnSkins: true,
        staticColor: true,
        smoothSwitch: true
      },
      performance: {
        renderMode: 'GPU (Pixi)',
        antialiasing: false,
        culling: false,
        foodPerformanceMode: false,
        glowFilterShaderType: 'GPU-1',
        fpsLockType: 'Screen-hz'
      }
    },
    hotkeys: {
      keyboard: {
        feed: 'E',
        macroFeed: 'W',
        split: 'Space',
        doubleSplit: '',
        tripleSplit: '',
        splitSixteen: '',
        quickRespawn: 'Backquote',
        pauseCell: 'P',
        toggleCellHelpers: '',
        toggleCellSkins: '',
        toggleCellRings: '',
        switchTabs: 'Tab',
        toggleFoodRender: 'F',
        toggleSpectatorMode: '',
        toggleHuds: ''
      },
      mouse: {
        left: '[NOT SET]',
        right: '[NOT SET]',
        middle: '[NOT SET]'
      },
      commands: [
        { key: 'Digit1', message: 'Feed me!' },
        { key: 'Digit2', message: 'Split into me!' },
        { key: 'Digit3', message: 'Need backup!' },
        { key: 'Digit4', message: 'Need a teammate' },
        { key: 'Digit5', message: 'Tank the virus!' },
        { key: 'Digit6', message: 'Eat the virus!' },
        { key: 'Digit7', message: 'Fake tricksplit!' },
        { key: 'ALT+Digit1', message: 'Fuck!' },
        { key: 'ALT+Digit2', message: 'Shit!' },
        { key: 'ArrowLeft', message: 'Left!' },
        { key: 'ArrowRight', message: 'Right!' },
        { key: 'ArrowDown', message: 'Bottom!' },
        { key: 'ArrowUp', message: 'Up!' },
        { key: '', message: '' },
        { key: '', message: '' },
        { key: '', message: '' },
        { key: '', message: '' },
        { key: '', message: '' },
        { key: '', message: '' },
        { key: '', message: '' }
      ]
    },
    theming: {
      cells: {
        oneColoredColor: { red: 240, green: 240, blue: 240 },
        oneColoredStatsColor: { red: 32, green: 32, blue: 32 },
        shadowColor: { red: 255, green: 255, blue: 255 },
        myShadowColor: { red: 255, green: 255, blue: 255 },
        shadowDistance: 10,
        shadowStrength: 2,
        myShadowStrength: 3,
        myShadowDistance: 50,
        adaptiveShadow: true,
        transparency: 1,
        colorLighten: 80
      }, 
      food: {
        enabled: true,
        firstTabEnabled: true,
        secondTabEnabled: true,
        topOneTabEnabled: false,
        size: 10,
        color: { red: 255, green: 255, blue: 255 },
        glow: true,
        glowColor: { red: 125, green: 115, blue: 255 },
        glowDistance: 50,
        glowStrength: 10,
        crisp: true
      },
      map: {
        borderType: 'Common',
        borderRoundness: 80,
        borderWidth: 20,
        borderColor: { red: 255, green: 255, blue: 255 },
        borderGlow: true,
        borderGlowColor: { red: 190, green: 50, blue: 255 },
        borderGlowDistance: 250,
        borderGlowStrength: 10,
        backgroundTint: { red: 210, green: 55, blue: 210 },
        backgroundImage: true,
        backgroundImageUrl: 'https://i.imgur.com/jhqCkiV.jpg',
        backgroundImageLiveEffectStrength: 'Disabled',
        globalBackgroundImage: true,
        globalBackgroundImageUrl: 'https://i.imgur.com/zjKAsyK.png',
        globalBackgroundImageTint: { red: 120, green: 45, blue: 255 },
        globalBackgroundImageLiveEffectStrength: 'Disabled'
      },
      minimap: {
        backgroundColor: { red: 16, green: 16, blue: 16, alpha: .75 },
        size: 240,
        myViewportColor: { red: 66, green: 175, blue: 255, alpha: .5 },
        topOneViewportColor: { red: 100, green: 190, blue: 255, alpha: .5 },
        playerSize: 10,
        playerColor: { red: 255, green: 255, blue: 255 },
        ghostCellsColor: { red: 157, green: 217, blue: 255 }
      },
      multibox: {
        ringStyle: 'Line',
        linedRingSize: 80,
        initialRingColor: { red: 255, green: 255, blue: 255 },
        focusedRingColor: { red: 60, green: 80, blue: 170 },
        initialStaticCellColor: { red: 255, green: 255, blue: 255 },
        focusedStaticCellColor: { red: 255, green: 255, blue: 255 }
      },
      viruses: {
        color: { red: 85, green: 190, blue: 255 },
        borderWidth: 20,
        borderColor: { red: 255, green: 255, blue: 255 },
        glow: true,
        glowColor: { red: 85, green: 190, blue: 255 },
        glowDistance: 150,
        glowStrength: 8,
        transparency: 0.2,
        massType: 'Fill circle',
        fillCircleColor: { red: 255, green: 255, blue: 255 },
      }
    },
    UI: {
      leaderboard: {
        shown: true,
        displayAmount: 10,
        displayPosition: true,
        scale: 1,
        showMass: true,
        backdropBlur: false,
        backgroundColor: { red: 24, green: 24, blue: 24, alpha: 0.5 },
        meColor: { red: 60, green: 80, blue: 170 },
        shortMass: false
      },
      stats: {
        shown: true,
        position: 'BOTTOM CENTER',
        fps: true,
        loss: true,
        backgroundColor: { red: 24, green: 24, blue: 24, alpha: 0.5 },
        backdropBlur: false,
        frametime: true,
        tabs: true,
        firstTabStatus: 'DISCONNECTED',
        secondTabStatus: 'DISCONNECTED',
        spectatorTabStatus: 'DISCONNECTED'
      },
      topTeam: {
        shown: true,
        displayAmount: 5,
        totalMass: true,
        shortMass: true,
        displayPlayerMass: true,
        totalPlayers: true,
        backgroundColor: { red: 24, green: 24, blue: 24, alpha: 0.5 },
        backdropBlur: false,
      },
      spectate: {
        shown: true,
        backdropBlur: false,
        backgroundColor: { red: 19, green: 19, blue: 19 },
      },
      chat: {
        enabled: true,
        height: 300,
        chatType: 'CHATBOX',
        backgroundColor: { red: 24, green: 24, blue: 24, alpha: 0.5 },
        fontColor: { red: 255, green: 255, blue: 255 },
        commandMessageBackgroundColor: { red: 210, green: 110, blue: 110, alpha: 0.75 },
        commandMessageFontColor: { red: 255, green: 255, blue: 255 },
        gameMessageBackgroundColor: { red: 32, green: 32, blue: 32, alpha: 0.75 },
        gameMessageFontColor: { red: 240, green: 240, blue: 240 }
      }  
    }
  },
  game: {
    servers: [
      { location: 'China', playersAmount: 0 },
      { location: 'East Asia', playersAmount: 0 },
      { location: 'Europe', playersAmount: 4891 },
      { location: 'North America', playersAmount: 0 },
      { location: 'Oceania', playersAmount: 0 },
      { location: 'Russia', playersAmount: 0 },
      { location: 'South America', playersAmount: 9724 },
      { location: 'Turkey', playersAmount: 0 }
    ],
    currentServerIndex: 2,
    mode: ':party',
    tag: '',
    token: '',
    gameServerToken: '',
    selectedGameTokenType: "PARTY"
  },
  profiles: {
    leftProfiles: [
      { nick: 'Profile #1', skinUrl: '', tag: '' },
      { nick: 'Profile #2', skinUrl: '', tag: '' },
      { nick: 'Profile #3', skinUrl: '', tag: '' },
      { nick: 'Profile #4', skinUrl: '', tag: '' },
      { nick: 'Profile #5', skinUrl: '', tag: '' },
      { nick: 'Profile #6', skinUrl: '', tag: '' },
      { nick: 'Profile #7', skinUrl: '', tag: '' },
      { nick: 'Profile #8', skinUrl: '', tag: '' },
      { nick: 'Profile #9', skinUrl: '', tag: '' },
      { nick: 'Profile #10', skinUrl: '', tag: '' }
    ],
    rightProfiles: [
      { nick: 'Profile #11', skinUrl: '', tag: '' },
      { nick: 'Profile #12', skinUrl: '', tag: '' },
      { nick: 'Profile #13', skinUrl: '', tag: '' },
      { nick: 'Profile #14', skinUrl: '', tag: '' },
      { nick: 'Profile #15', skinUrl: '', tag: '' },
      { nick: 'Profile #16', skinUrl: '', tag: '' },
      { nick: 'Profile #17', skinUrl: '', tag: '' },
      { nick: 'Profile #18', skinUrl: '', tag: '' },
      { nick: 'Profile #19', skinUrl: '', tag: '' },
      { nick: 'Profile #20', skinUrl: '', tag: '' }
    ],
    leftSelectedIndex: 0,
    rightSelectedIndex: 0,
    leftProfileLoginType: 'FACEBOOK',
    rightProfileLoginType: 'GOOGLE',
    googleLoggedIn: false,
    facebookLoggedIn: false
  }
};

export default initStorage;