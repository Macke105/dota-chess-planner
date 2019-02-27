
import heroList from './assets/herolist.json';

export default function filterEmoji(searchText) {
  return heroList
    .filter(hero => {
      if (hero.name.toLowerCase().includes(searchText.toLowerCase())) {
        return true;
      }
      if (hero.className.includes(searchText)) {
        return true;
      }
      return false;
    })
}