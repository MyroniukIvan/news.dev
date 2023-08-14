"use client";
import LogoSection from "@/components/shared/ui/logoSection";
import {Provider} from "react-redux";
import store from "@/components/store/store";
import CardPagination from "@/components/shared/ui/cards";
import Footer from "@/components/shared/ui/footer";

export default function Home() {
    return (
        <Provider store={store}>
            <main>
                <LogoSection/>
                <CardPagination/>
                <Footer/>
            </main>
        </Provider>
    );
}
