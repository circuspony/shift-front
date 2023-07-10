import { Link } from 'react-router-dom';
import { MdSettings } from 'react-icons/md';
import { IoMdPlanet } from 'react-icons/io';
import { TiSocialFacebook, TiSocialTwitter, TiSocialInstagram } from 'react-icons/ti';
import useAuth from '../../hooks/useAuth';
import SmallProjectCard from '../../components/project/projectPanels/smallProjectCard';

const projects = [
  {
    name: 'Дайте денег на выпивку',
    shortDescription:
      'Шахтер Антуан очень хочет выпить, но зарплату задерживают уже 4-й месяц. Помогите.',
    fullDescription:
      'Главный герой истории – простой шахтер по кличке Хендрик, который под своим родным городом находит огромного робота-дракона и разумный энергетический кристалл. Активировав его, Хендрик становится единственным пилотом, который может управлять этой машиной. Когда ты единственный, кто может пилотировать такую машину, тобой заинтересовываются очень многие: армия, правительство, императрица, оккультисты, пираты и черт знает кто. Признаться честно, издаться было не просто. Комикс от неизвестной команды авторов оказался никому не нужен. Напечататься самим не получилось - в 2014 г. случился кризис и цены на бумагу резко подскочили. К счастью в 2015 году проект «Механизмы Хендрика» нашла Анна Коростелева, согласилась издать, а теперь проект дорос уже до издания в твердом переплете. Создание комикса – это всегда долгий и сложный путь, который авторы и издатель прошли вместе, несмотря ни на что. Всех подводило здоровье, были личные дела, проблемы, работа, но авторы все преодолели и закончили большую арку этой истории! И сейчас цель только в одном – издать книжку в красивом твердом переплете с всеми историями внутри! Поддержите проект! Авторы вас не разочаруют ;)',
    image:
      'https://i2-prod.walesonline.co.uk/lifestyle/nostalgia/article7925152.ece/ALTERNATES/s615/0_coal.jpg',
    finished: false,
    needed: 300000,
    collected: 100000,
    sponsors: 69,
    startDate: new Date('2023-04-04'),
    endDate: new Date('2023-12-12'),
    category: 'Литература и журналистика',
    creator: {
      firstName: 'антуан',
      lastName: 'антуан',
      avatar: 'https://i.scdn.co/image/ab6761610000e5eb816f8ce05990b68f6fe1457d',
      projectNumber: 9
    }
  },

  {
    name: 'Дайте денег на ёлку',
    shortDescription:
      'У птичек и зверушек и детишек не хватает денег на ёлочку для отмечания летнего нового года. Власти города отказываются сотрудничать с общиной и не дают ни ёлки, ни палки.',
    fullDescription:
      'Главный герой истории – простой шахтер по кличке Хендрик, который под своим родным городом находит огромного робота-дракона и разумный энергетический кристалл. Активировав его, Хендрик становится единственным пилотом, который может управлять этой машиной. Когда ты единственный, кто может пилотировать такую машину, тобой заинтересовываются очень многие: армия, правительство, императрица, оккультисты, пираты и черт знает кто. Признаться честно, издаться было не просто. Комикс от неизвестной команды авторов оказался никому не нужен. Напечататься самим не получилось - в 2014 г. случился кризис и цены на бумагу резко подскочили. К счастью в 2015 году проект «Механизмы Хендрика» нашла Анна Коростелева, согласилась издать, а теперь проект дорос уже до издания в твердом переплете. Создание комикса – это всегда долгий и сложный путь, который авторы и издатель прошли вместе, несмотря ни на что. Всех подводило здоровье, были личные дела, проблемы, работа, но авторы все преодолели и закончили большую арку этой истории! И сейчас цель только в одном – издать книжку в красивом твердом переплете с всеми историями внутри! Поддержите проект! Авторы вас не разочаруют ;)',
    image: 'https://obninsk.name/news46738.jpg',
    finished: false,
    needed: 300000,
    collected: 500000,
    sponsors: 69,
    startDate: new Date('2023-04-04'),
    endDate: new Date('2023-12-12'),
    category: 'Литература и журналистика',
    creator: {
      firstName: 'антуан',
      lastName: 'антуан',
      avatar: 'https://i.scdn.co/image/ab6761610000e5eb816f8ce05990b68f6fe1457d',
      projectNumber: 9
    }
  },

  {
    name: 'Дайте денег на лечение ежат',
    shortDescription:
      'Шахтер Антуан очень хочет вылечить местных ежат, но зарплату задерживают уже 5-й месяц. Помогите.',
    fullDescription:
      'Главный герой истории – простой шахтер по кличке Хендрик, который под своим родным городом находит огромного робота-дракона и разумный энергетический кристалл. Активировав его, Хендрик становится единственным пилотом, который может управлять этой машиной. Когда ты единственный, кто может пилотировать такую машину, тобой заинтересовываются очень многие: армия, правительство, императрица, оккультисты, пираты и черт знает кто. Признаться честно, издаться было не просто. Комикс от неизвестной команды авторов оказался никому не нужен. Напечататься самим не получилось - в 2014 г. случился кризис и цены на бумагу резко подскочили. К счастью в 2015 году проект «Механизмы Хендрика» нашла Анна Коростелева, согласилась издать, а теперь проект дорос уже до издания в твердом переплете. Создание комикса – это всегда долгий и сложный путь, который авторы и издатель прошли вместе, несмотря ни на что. Всех подводило здоровье, были личные дела, проблемы, работа, но авторы все преодолели и закончили большую арку этой истории! И сейчас цель только в одном – издать книжку в красивом твердом переплете с всеми историями внутри! Поддержите проект! Авторы вас не разочаруют ;)',
    image: 'https://sugaring-shellac.ru/ZOOimg/image/catalog/images/articles/jezh-v-domje.jpg',
    finished: false,
    needed: 300000,
    collected: 200000,
    sponsors: 69,
    startDate: new Date('2023-04-04'),
    endDate: new Date('2023-12-12'),
    category: 'Литература и журналистика',
    creator: {
      firstName: 'антуан',
      lastName: 'антуан',
      avatar: 'https://i.scdn.co/image/ab6761610000e5eb816f8ce05990b68f6fe1457d',
      projectNumber: 9
    }
  }
];

const Profile = () => {
  const { userInfo } = useAuth();

  return (
    <div className='w-full h-full flex flex-col items-center'>
      <div className='bg-slate-900 w-1/3 min-h-[200px] rounded-2xl'>
        <div className='flex p-4 m-4 relative items-center'>
          <img
            src={'/images/cat.jpg'}
            alt=''
            className='flex w-36 h-36 border-solid border-white rounded-full'
          />
          <div className='grid justify-items-start ml-6'>
            <h1 className='font-bold text-lg text-center text-white pt-2'>
              {userInfo.firstname} {userInfo.lastname}
            </h1>
            <div className='flex'>
              <Link to={userInfo.personalWebLink} className='pr-2'>
                <IoMdPlanet size={24} />
              </Link>
              <Link to={userInfo.instagramLink} className='pr-2'>
                <TiSocialInstagram size={24} />
              </Link>
              <Link to={userInfo.twitterLink} className=''>
                <TiSocialTwitter size={24} />
              </Link>
              <Link to={userInfo.facebookLink} className=''>
                <TiSocialFacebook size={24} />
              </Link>
            </div>
            <div className='followers'>
              <h2 className='font-normal text-ls text-center tracking-wide text-white pb-1'>
                Проекты {userInfo.projects}
              </h2>
            </div>
            {/* <div className='font-normal text-base text-center text-white pb-2'>{props.age}</div> */}
            {/* <h2 className='font-normal text-base text-center text-white pb-2'>{props.city}</h2> */}
            {/* <div className='flex flex-col text-center items-center'></div> */}

            {/* <label htmlFor='description' className='block w-full font-bold text-xl text-white'>
              Обо мне
            </label> */}
            <div className='font-normal text-xs tracking-wide text-white'>
              {' '}
              {userInfo.description}{' '}
            </div>
          </div>
          <Link to='/profile/edit' className='text-white absolute top-0 right-0'>
            <MdSettings size={28} />
          </Link>
        </div>
      </div>
      <div className='flex flex-col w-1/3'>
        <div className='w-full my-0 mx-auto border-solid border-b-2'>
          <h1 className='text-3xl p-2'>Созданные проекты</h1>
        </div>
        <div>
          {projects.map((project) => (
            <SmallProjectCard project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
