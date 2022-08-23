import React from "react";
import { Link } from "react-router-dom";

export const NotFoundPage = () => {
    return (
       <Link to={'/'}> Такой страницы нет. Перейдите на главную</Link>
    )
}