import Batman from '../assets/batman_begins.jpeg'
import Dune from '../assets/dune.jpeg'
import Sing from '../assets/sing_2.jpeg'
import Spider from '../assets/spider_man.jpeg'


export interface Movie {
  src : string;
  title : string;
  main:string;
  runtime:string;
}

export const moviesData: Movie[]=[
  {
    src:Batman ,title :'Batman Begins' ,main:'Christian Bale',runtime :'120m'
  },
  {
    src:Dune ,title :'Dune' ,main:'Timodad chadkasd',runtime :'120m'
  },
  {
    src:Sing ,title :'Sing2' ,main:'Madsad Dsakjfkc',runtime :'120m'
  },
  {
    src:Spider ,title :'Spider-Man' ,main:'Ccsdcqw Sadsdhcj',runtime :'120m'
  }
]