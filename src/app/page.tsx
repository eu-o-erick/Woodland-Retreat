import HeaderComponent from "@/components/header";

export default function Home() {
  return (
    <>
      <HeaderComponent />

      <section id="home" className="min-h-screen">
        home
      </section>
      <section id="about" className="min-h-screen">
        about
      </section>
      <section id="contact" className="min-h-screen">
        contact
      </section>
    </>
  );
}
