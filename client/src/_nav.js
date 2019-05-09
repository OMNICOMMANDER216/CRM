export default {
  items: [
    {
      title: true,
      name: 'Oumar',
      image: 'icon-speedometer',
    },
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
    },
    {
      title: true,
      name: 'CUSTOMERS',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Customers Overview',
      url: '/customers',
      icon: 'icon-people',
    },
    {
      title: true,
      name: 'Notification',
      wrapper: {
        element: '',
        attributes: {},
      },
    },
    {
      name: 'messages',
      url: '/notification',
      icon: 'icon-envelope-letter'
    },
    {
      title: true,
      name: 'PROJECTS',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    }
  ],
};
