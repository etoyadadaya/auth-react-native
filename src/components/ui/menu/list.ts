import {IMoreItem} from "./menu.types";

const startUrl = "https://www.google.com"
export const menu: IMoreItem[] = [
    {
        title: "some title1",
        description: "some description",
        iconName: "account-balance",
        link: `${startUrl}`,
    },
    {
        title: "some title2",
        description: "some description",
        iconName: "circle",
        link: `${startUrl}`,
    },
    {
        title: "some title3",
        description: "some description",
        iconName: "find-in-page",
        link: `${startUrl}`,
    },
    {
        title: "some title4",
        description: "some description",
        iconName: "business",
        link: `${startUrl}`,
    },
    {
        title: "some title5",
        description: "some description",
        iconName: "business",
        link: `${startUrl}`,
    },
]