import React from 'react';
import DefaultLayout from './containers/DefaultLayout';
import RequireAuth from './helpers/RequireAuth';

const LoggedIn = React.lazy(() => import('./views/Pages/Login/LoggedIn'));
const Dashboard = React.lazy(() => import('./views/Dashboard'));
const Customers = React.lazy(() => import('./views/Customers/Customers'));
const Customer = React.lazy(() => import('./views/Customers/Customer'));
const ManageCustomer = React.lazy(() => import('./views/Customers/ManageCustomer'));
const Users = React.lazy(() => import('./views/Users/Users'));
const User = React.lazy(() => import('./views/Users/User'));
const Notification = React.lazy(() => import('./views/Notification/NotificationList'));
const ManageFolder = React.lazy(() => import('./views/Folders/ManageFolder'));
const Board = React.lazy(() => import('./views/Folders/Board/Board'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/logged', name: 'Logging Success', component: LoggedIn },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/customers', exact: true,  name: 'Customers', component: RequireAuth(Customers) },
  { path: '/customer/edit/:id', name: 'Edit Customer', component: RequireAuth(ManageCustomer) },
  { path: '/customer/add', name: 'Create a new Customer', component: RequireAuth(ManageCustomer) },
  { path: '/customers/:id', exact: true, name: 'Customer Info', component: RequireAuth(Customer) },
  { path: '/users', exact: true,  name: 'Users Page', component: RequireAuth(Users) },
  { path: '/users/:id', exact: true, name: 'User Info', component: RequireAuth(User) },
  { path: '/Notification/', exact: true, name: 'Messages', component: RequireAuth(Notification) },
  { path: '/addBoard/:folder_id', name: 'Create a new Board', component: RequireAuth(ManageFolder) },
  { path: '/editBoard/:folder_id', name: 'Edit Board', component: RequireAuth(ManageFolder) },
  { path: '/board/:id', name: 'Board Page', component: RequireAuth(Board) },
];

export default routes;