import React from "react";
import { CustomLink } from "./CustomLink";
import { Outlet } from "react-router-dom";

export const Layout = () => {
    return (
        <>
            <header>
                <CustomLink to={'/'}>Главная</CustomLink>
                <CustomLink to={'/chats'}>Чаты</CustomLink>
                <CustomLink to={'/profile'}>Сраница профиля</CustomLink>
            </header>

            <main>
                <Outlet/>
            </main>

            <footer>

            </footer>
        </>
    )
}