import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Login from '../screens/Login';
import TabComponent from '../components/BottomBar';
import DrawerComponent from '../components/Drawer';

const Drawer = createDrawerNavigator();

export default function Navigation() {
  const [loading, setLoading] = React.useState(false);
  const [auth, setAuth] = React.useState(false);

  return auth ? (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <DrawerComponent {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={TabComponent}
        options={{ swipeEnabled: false }}
      />
    </Drawer.Navigator>
  ) : (
    <Login setAuth={setAuth} setLoading={setLoading} loading={loading} />
  );
}
