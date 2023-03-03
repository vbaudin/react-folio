import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Tabs, Tab, AppBar, Box, Toolbar } from "@mui/material"
import { styled } from "@mui/material/styles"

import { selectTab } from '../selectors/app';
import { changeTab } from '../ducks/app'
import { HOMEPAGE, PIXELARTGENERATOR } from '../constants';

const StyledTab = styled(Tab)(() => ({
  color: 'white'
}))

const Header = () => {
  const tab = useSelector(selectTab);
  const dispatch = useDispatch();

  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" sx={{ }}>
        <Toolbar sx={{  }}>
          <Tabs
            value={tab}
            onChange={(_, tab) => dispatch(changeTab(tab))}
            textColor="secondary"
            indicatorColor="secondary"
          >
            <StyledTab 
              value={HOMEPAGE}
              label={HOMEPAGE}
              color="secondary"
            />
            <StyledTab 
              value={PIXELARTGENERATOR}
              label={PIXELARTGENERATOR}
              textColor="secondary"
            />
          </Tabs>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header