import Dashboard from "../pages/Dashboard/Dashboard";
import Example from "../pages/Example/Example";
import Bookings from "../pages/Bookings/Bookings";
import Clinics from "../pages/Clinics/Clinics";
import Customers from "../pages/Customers/Customers";
import Feedbacks from "../pages/Feedbacks/Feedbacks";
import IAM from "../pages/IAM/IAM";
import Settings from "../pages/Settings/Settings";
import Services from "../pages/Services/Services";

export const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    showOnSide: true,
    protected: true,
    icon: <i className="fas fa-home"></i>
  },
  {
    path: '/bookings',
    name: 'Bookings',
    component: Bookings,
    showOnSide: true,
    protected: true,
    icon: <i className="fas fa-clipboard-list"></i>
  },
  {
    path: '/clinics',
    name: 'Clinics',
    component: Clinics,
    showOnSide: true,
    protected: true,
    icon: <i className="fas fa-hospital"></i>
  },
  {
    path: '/customers',
    name: 'Customers',
    component: Customers,
    showOnSide: true,
    protected: true,
    icon: <i className="fas fa-user-friends"></i>
  },
  {
    path: '/services',
    name: 'Services',
    component: Services,
    showOnSide: true,
    protected: true,
    icon: <i className="fas fa-tools"></i>
  },
  {
    path: '/feedbacks',
    name: 'Feedbacks',
    component: Feedbacks,
    showOnSide: true,
    protected: true,
    icon: <i className="fas fa-comment-alt"></i>
  },
  {
    path: '/iam',
    name: 'IAM',
    component: IAM,
    showOnSide: true,
    protected: true,
    icon: <i className="fas fa-users-cog"></i>
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings,
    showOnSide: true,
    protected: true,
    icon: <i className="fas fa-cog"></i>
  },
  {
    path: '/example',
    name: 'Example',
    component: Example,
    showOnSide: false,
    protected: true,
  },
]