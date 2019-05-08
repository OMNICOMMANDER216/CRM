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
  { path: '/logged', name: 'Loggin Success', component: LoggedIn },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/customers', exact: true,  name: 'Customers', component: RequireAuth(Customers) },
  { path: '/customer/edit/:id', name: 'Customers Edit', component: RequireAuth(ManageCustomer) },
  { path: '/customer/add', name: 'Customers Add', component: RequireAuth(ManageCustomer) },
  { path: '/customers/:id', exact: true, name: 'Customer Detail', component: RequireAuth(Customer) },
  { path: '/users', exact: true,  name: 'Users', component: RequireAuth(Users) },
  { path: '/users/:id', exact: true, name: 'User Details', component: RequireAuth(User) },
  { path: '/Notification/', exact: true, name: 'Notification Page', component: RequireAuth(Notification) },
  { path: '/addBoard/:folder_id', name: 'Board Add', component: RequireAuth(ManageFolder) },
  { path: '/editBoard/:folder_id', name: 'Edit Add', component: RequireAuth(ManageFolder) },
  { path: '/board/:id', name: 'Board Page', component: RequireAuth(Board) },
];

export default routes;