import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import Image from "next/image";
const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white bg-primary-50/20">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link className="flex items-center" href={"/"}>
          <Image src={"/assets/logo.png"} alt="logo" width={50} height={10} />
          <h1 className="text-4xl font-semibold">
            Tanvirul<span className="text-accent">.</span>
          </h1>
        </Link>
        {/* desktop nav and hire me button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href={"/contact"}>
            <Button>Hire me</Button>
          </Link>
        </div>
        {/* Mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
