import { getDictionary, Locale } from "../utils/dictionaries";



export default async function Footer({ lang }: { lang: string }) {
    const dictionary = await getDictionary(lang as Locale);
    return (
        <footer className="main-footer">
            <p>{dictionary.footer.copyright}</p>
            <p>{dictionary.footer.developed}</p>
        </footer>
    );
}