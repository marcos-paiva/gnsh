import ClickEfx from '../static/audio/action-click.wav'

const audioEfx = new Audio(ClickEfx);

const playClick = (sound) => {
    sound.play()
}

export { playClick }