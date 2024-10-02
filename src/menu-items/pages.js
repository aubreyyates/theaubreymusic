// assets
import { HomeOutlined } from '@ant-design/icons';
import PhoneIcon from '@mui/icons-material/Phone';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

// icons
const icons = {
  HomeOutlined,
  MusicNoteIcon,
  CalendarMonthIcon,
  PhoneIcon
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
  id: 'pages',
  title: 'Pages',
  type: 'group',
  children: [
    {
      id: 'home',
      title: 'Home',
      type: 'item',
      url: '/home',
      icon: icons.HomeOutlined,
      breadcrumbs: false
    },
    {
      id: 'music',
      title: 'Music',
      type: 'item',
      url: '/music',
      icon: icons.MusicNoteIcon
    }
    // {
    //   id: 'dates',
    //   title: 'Dates',
    //   type: 'item',
    //   url: '/dates',
    //   icon: icons.CalendarMonthIcon
    // },
    // {
    //   id: 'contact',
    //   title: 'Contact',
    //   type: 'item',
    //   url: '/contact',
    //   icon: icons.PhoneIcon
    // }
  ]
};

export default pages;
