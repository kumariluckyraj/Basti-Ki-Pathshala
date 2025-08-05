"use client"
export default function AboutPage() {
  return (
    <main className="min-h-screen  text-gray-800 px-60 py-12 bg-cover bg-center bg-no-repeat "
    style={{
    backgroundImage: "url('/whitebg.jpg')",
  }}>
    
      <h1 className="text-4xl font-bold mb-6 text-center">About Basti Ki Pathshala</h1>
      
      <section className="space-y-6">
        <p>
          Basti Ki Pathshala is a youth-led non-profit organization founded with a vision to bridge the gap
          in access to quality education for children in under-resourced communities. Our mission is to create
          a nurturing and inclusive learning environment that empowers children to grow, dream, and achieve.
        </p>

        <p>
          We strongly believe in the philosophy of “learning by doing,” where children are encouraged to explore,
          create, and engage with real-world problems. Our volunteers, largely composed of passionate students and young professionals,
          work directly with communities to teach, mentor, and uplift.
        </p>

        <p>
          Our work extends beyond just textbooks — we also focus on holistic development through activities like art, sports, life skills,
          and health awareness sessions.
        </p>

        <p>
          Through workshops, community engagement, and consistent mentorship, we aim to foster curiosity, confidence, and compassion
          among the next generation.
        </p>

        <p>
          If you&apos;re someone who believes in the power of education and wants to make a difference, we&apos;d love to have you on this journey with us.
        </p>
      </section>
    </main>
  );
}
