import state from './state';
import { parsePokemonInfo } from '@/utils';

export default {
  get pokemonsInfo() {
    return state.list.map(parsePokemonInfo)
  }
}