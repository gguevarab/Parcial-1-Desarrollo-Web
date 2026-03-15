import { getDictionary, Locale } from "../utils/dictionaries";



export default async function Footer({ lang }: { lang: string }) {
    const dictionary = await getDictionary(lang as Locale);
    return (
        <footer className="bg-[#BBCCBB] text-black font-semibold text-sm py-4 px-10 flex flex-col md:flex-row justify-between items-center w-full mt-auto text-center gap-2">
            <p>{dictionary.footer.copyright}</p>
            <p>{dictionary.footer.developed}</p>
        </footer>
    );
}