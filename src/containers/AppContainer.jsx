import { useEffect, useState } from "react";

import SwipeableViews from "react-swipeable-views";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { Sidebar } from "../components/sidebar";
import { DrawerActionButton } from "../components/drawer";
import PagesContainer from "./PagesContainer";
import MainLayout from "../layouts/MainLayout";
import { Page } from "../components/pages";
import SidebarContainer from "./SidebarContainer";

import MainContext from "../context";
import { Home, About, Resume, Courses, Comments, Contact } from "../pages/";

function AppContainer() {
  const [pageNumber, setPageNumber] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mode, setMode] = useState();

  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  useEffect(() => {
    setMode(prefersDarkMode ? "dark" : "light");
  }, []);

  useEffect(() => {
    if (isMdUp) setDrawerOpen(false);
  }, [isMdUp]);

  const handlePageNumber = (event, newValue) => setPageNumber(newValue);

  const handleThemeChange = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <MainContext.Provider
      value={{
        pageNumber,
        handlePageNumber,
        handleThemeChange,
        drawerOpen,
        setDrawerOpen,
      }}
    >
      <MainLayout mode={mode}>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <DrawerActionButton />

        <PagesContainer>
          <SwipeableViews index={pageNumber} onChangeIndex={handlePageNumber}>
            <Page pageNumber={pageNumber} index={0}>
              <Home helmetTitle="وبسایت عمران رستم زاده | صفحه اصلی" />
            </Page>
            <Page pageNumber={pageNumber} index={1}>
              <About helmetTitle="وبسایت عمران رستم زاده | درباره من" />
            </Page>
            <Page pageNumber={pageNumber} index={2}>
              <Resume helmetTitle="وبسایت عمران رستم زاده | رزومه من" />
            </Page>
            <Page pageNumber={pageNumber} index={3}>
              <Courses helmetTitle="وبسایت عمران رستم زاده | دوره های من" />
            </Page>
            <Page pageNumber={pageNumber} index={4}>
              <Comments helmetTitle="وبسایت عمران رستم زاده | نظرات دانشجویان" />
            </Page>
            <Page pageNumber={pageNumber} index={5}>
              <Contact helmetTitle="وبسایت عمران رستم زاده | ارتباط با من" />
            </Page>
          </SwipeableViews>
        </PagesContainer>
      </MainLayout>
    </MainContext.Provider>
  );
}

export default AppContainer;
