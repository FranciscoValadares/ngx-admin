import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Indicação ',
    icon: 'shopping-cart-outline',
    link: '/pages/layout/list',
    home: true,
  },
  {
    title: 'Método',
    icon: 'home-outline',
    link: '/pages/layout/list1',
  },
  {
    title: 'Artefatos/Limitações',
    icon: 'home-outline',
    link: '/pages/layout/list2',
  },
  {
    title: 'Dispositivos, Tubos e Cateteres',
    icon: 'home-outline',
    link: '/pages/layout/list3',
  },
  {
    title: 'Parênquima Pulmonar',
    icon: 'home-outline',
    link: '/pages/layout/list4',
  },
  {
    title: 'Espaço Pleural',
    icon: 'shopping-cart-outline',
    link: '/pages/layout/list5',
  },
  {
    title: 'Traquéia e Brônquios',
    icon: 'home-outline',
    link: '/pages/layout/list6',
  },
  {
    title: 'Estruturas Vasculares',
    icon: 'shopping-cart-outline',
    link: '/pages/layout/list7',
  },
  {
    title: 'Coração',
    icon: 'home-outline',
    link: '/pages/layout/list8',
  },
  
  {
    title: 'Linfonodomegalias- Tiny MCE',
    icon: 'text-outline',
    link: '/pages/layout/list9',
  },
  {
    title: 'TIPOS DE EXAMES',
    group: true,
  },
  
  {
    title: 'Modalidades',
    icon: 'text-outline',
    children: [
      {
        title: 'Modalidades',
        link: '/pages/dashboard',//link: '/pages/editors/tinymce',
      },
      {
        title: 'CKEditor',
        link: '/pages/iot-dashboard',//link: '/pages/editors/ckeditor',
      },
    ],
  },

  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];


 
 
 
 
  