import coverImageSrc1 from '../../assets/covers/friend-of-mine_2_11zon.webp';
import coverImageSrc2 from '../../assets/covers/you_6_11zon.webp';
import coverImageSrc3 from '../../assets/covers/unsolved-problem_5_11zon.webp';
import coverImageSrc4 from '../../assets/covers/album_9_11zon.webp';
import coverImageSrc5 from '../../assets/covers/dont-look-down_8_11zon.webp';
import coverImageSrc6 from '../../assets/covers/console_7_11zon.webp';
import coverImageSrc7 from '../../assets/covers/the-first-time_4_11zon.webp';
import coverImageSrc8 from '../../assets/covers/luminance_1_11zon.webp';
import coverImageSrc9 from '../../assets/covers/rondo_3_11zon.webp';
import CoverGallery from './Cover';

const covers = [
  { url: coverImageSrc1, alt: 'Friend of Mine', text: 'Friend of Mine' },
  { url: coverImageSrc2, alt: 'You', text: 'You' },
  { url: coverImageSrc3, alt: 'Unsolved Problem', text: 'Unsolved Problem' },
  { url: coverImageSrc4, alt: 'Album', text: `You Shouldn't Let One Thing Be the Meaning of Your Life` },
  { url: coverImageSrc5, alt: 'Don\'t Look Down', text: 'Don\'t Look Down' },
  { url: coverImageSrc6, alt: 'console.log(\'You will hear the voice of reason\')', text: 'console.log(\'You will hear the voice of reason\')' },
  { url: coverImageSrc7, alt: 'The First Time Simply', text: 'The First Time Simply' },
  { url: coverImageSrc8, alt: 'Luminance', text: 'Luminance' },
  { url: coverImageSrc9, alt: 'Rondò Avventura Fantasy', text: 'Rondò Avventura Fantasy' },
];

export default function Music() {
  return <section>
    <CoverGallery covers={covers} />
  </section>
}