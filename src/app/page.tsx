import Image from "next/image";
import Link from "next/link";
import { getSortedPostsData } from "@/lib/news";
import HeroSlider from "./components/HeroSlider";
import { siteConfig } from "@/config/site";

export default function Home() {
  const latestNews = getSortedPostsData().slice(0, 3);

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section
        className="section-fade-bottom"
        style={{
          height: '100vh',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '0 24px'
        }}
      >
        <HeroSlider interval={siteConfig.heroSlider.interval} />

        <div className="container">
          <h1 style={{ fontSize: 'clamp(3rem, 10vw, 6rem)', lineHeight: 1.1, marginBottom: '24px' }}>
            Lively & Relaxed.<br />
            <span className="gradient-text">Welcome to Kamosaba</span>
          </h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto 40px', opacity: 0.9 }}>
            Java and Bedrock players are both welcome!<br />
            Why not meet new friends in the world of Minecraft?
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <Link href="https://discord.kamosaba.net" target="_blank" className="glass" style={{
              padding: '16px 40px',
              fontSize: '1.1rem',
              fontWeight: 700,
              backgroundColor: '#5865F2',
              color: 'white',
              border: 'none',
              boxShadow: '0 4px 20px rgba(88, 101, 242, 0.4)'
            }}>
              Join Now
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-fade-bottom" style={{ padding: '100px 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
          <div className="glass-card">
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--accent)' }}>Multi-device Support</h3>
            <p>Players on Java edition, as well as Bedrock edition (BE) players on Switch or mobile, can all play together on the same server.</p>
          </div>
          <div className="glass-card">
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--accent)' }}>Relaxed Community</h3>
            <p>We value an open, "lively and relaxed" atmosphere. Beginners are welcome to join with peace of mind.</p>
          </div>
          <div className="glass-card">
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--accent)' }}>Lots of Events</h3>
            <p>We plan plenty of events, including seasonal activities and cooperative building projects.</p>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="section-fade-both" style={{ padding: '100px 0', background: 'rgba(255,255,255,0.02)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '2.5rem' }}>Latest News</h2>
            <Link href="/news" style={{ opacity: 0.6, fontSize: '0.9rem' }}>View all →</Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            {latestNews.map((post) => (
              <Link key={post.id} href={`/news/${post.id}`} className="glass-card">
                <span style={{ fontSize: '0.8rem', opacity: 0.6 }}>{post.date}</span>
                <h3 style={{ margin: '12px 0', lineHeight: 1.4 }}>{post.title}</h3>
                <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>{post.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Community CTA */}
      <section className="section-fade-top" style={{ padding: '120px 0', textAlign: 'center' }}>
        <div className="container">
          <div className="glass" style={{ padding: '80px 40px', borderRadius: '40px' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '24px' }}>Start Your New<br />Adventure Here</h2>
            <p style={{ marginBottom: '40px', opacity: 0.8 }}>Many friends are already waiting for you on our Discord server.</p>
            <Link href="https://discord.kamosaba.net/" target="_blank" className="glass" style={{
              padding: '16px 48px',
              fontSize: '1.2rem',
              fontWeight: 800,
              display: 'inline-block',
              background: '#5865F2',
              color: 'white',
              border: 'none'
            }}>
              Join the Community
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

