import {
    HomeRounded,
    FaceRounded,
    MessageRounded,
    ConnectWithoutContactRounded,
    BadgeOutlined,
} from "@mui/icons-material";

const tabProps = (index) => {
    return { id: `sidebar-tab-${index}`, "aria-controls": `tabpanel-${index}` };
};
export const tabsData = () => {
    const tabs = [
        { label: "صفحه اصلی", icon: <HomeRounded />, ...tabProps(0) },
        { label: "درباره من", icon: <FaceRounded />, ...tabProps(1) },
        //   { label: "رزومه من", icon: <TextSnippetRounded />, ...tabProps(2) },
        { label: "نمونه کار ها", icon: <BadgeOutlined />, ...tabProps(2) },
        // { label: "نظرات دانشجویان", icon: <MessageRounded />, ...tabProps(3) },
        {
            label: "ارتباط  با من",
            icon: <ConnectWithoutContactRounded />,
            ...tabProps(3),
        },
    ];
    return tabs;
};
