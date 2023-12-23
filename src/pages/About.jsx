import { Helmet } from "react-helmet-async";

import { Card, CardContent, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

import {
    CodeRounded,
    FaceRounded,
    SelfImprovementRounded,
} from "@mui/icons-material";

import avatar from "../assets/images/img.jpg";
import { DevInfo, Skills, DevWorkCount } from "../components/pages";

import { CustomAvatar, CustomDivider } from "../components/common";

const About = ({ helmetTitle }) => {
    return (
        <Card
            sx={{
                height: "100vh",
                backgroundColor: "whitesmoke",
                overflowY: "scroll",
            }}
        >
            <Helmet>
                <title> {helmetTitle} </title>
            </Helmet>
            <CardContent>
                <Grid container sx={{ mx: 3 }}>
                    <Grid xs={12} sm={12} md={8} lg={8} xl={8}>
                        <CustomDivider
                            bColor="primary.main"
                            cColor="primary"
                            icon={<CodeRounded />}
                            align="right"
                            text=" توسعه دهنده وب"
                        />
                        <Grid container>
                            <Grid
                                xs={4}
                                sm={4}
                                md={3}
                                lg={3}
                                sx={{
                                    mt: 3,
                                    display: {
                                        xs: "none",
                                        sm: "block",
                                        md: "block",
                                    },
                                }}
                            >
                                {/* <DevWorkCount /> */}
                            </Grid>
                            <Grid xs={12} sm={8} md={9} lg={9}>
                                <DevInfo />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid xs={0} sm={0} md={4} lg={4} xl={4}>
                        <CustomAvatar
                            avatar={avatar}
                            size={250}
                            fallback="ER"
                        />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid sx={{ width: 1, mt: 1, mb: 2 }}>
                        <CustomDivider
                            bColor="secondary.main"
                            cColor="secondary"
                            icon={<FaceRounded />}
                            align="center"
                            text="در باره من"
                        />
                        <Typography
                            variant="body1"
                            color="black"
                            sx={{
                                mt: 2,
                                direction: "ltr",
                                textAlign: "center",
                            }}
                        >
                            بدلیل علاقه به زبان های برنامه نویسی ابتدا با زبان
                            برنامه نویسی php و فریمورک لاراول شروع کردم، در حال
                            حاضر مسلط به زبان جاوا اسکریپت و در حوزه وب فعالیت
                            دارم
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid sx={{ width: 1, mt: 1 }}>
                        <CustomDivider
                            bColor="secondary.main"
                            cColor="secondary"
                            icon={<SelfImprovementRounded />}
                            align="center"
                            text="مهارت های من"
                        />
                        <Skills />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default About;
