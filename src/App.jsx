import React, { useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

// 1. STYLED COMPONENTS with Media Queries
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  background-color: #111827;
  border-bottom: 1px solid #1f2937;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

const NavTitle = styled.h1`
  font-size: 1.5rem;
  color: #60a5fa;
  letter-spacing: -0.5px;
`;

const Container = styled.main`
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
`;

const Card = styled.div`
  background: ${(props) => (props.isFeatured ? '#1e293b' : '#111827')};
  border: 1px solid ${(props) => (props.isFeatured ? '#3b82f6' : '#1f2937')};
  border-radius: 0.75rem;
  padding: 1.5rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
  }
`;

const Button = styled.button`
  background-color: #2563eb;
  color: #ffffff;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 0.375rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 1rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: #1d4ed8;
  }
`;

// 2. CSS-IN-JS (Emotion Object Styles)
const heroSectionStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 3rem 1rem;
  background: radial-gradient(circle at top, #1e293b 0%, #0b0f19 70%);
  border-radius: 1rem;
  margin-bottom: 2.5rem;
`;

function App() {
  const [filter, setFilter] = useState('All');

  const projects = [
    { id: 1, title: 'API Authentication Service', category: 'Backend', featured: true },
    { id: 2, title: 'RESTful Weather Dashboard', category: 'React', featured: false },
    { id: 3, title: 'E-Commerce Microservice', category: 'Backend', featured: false },
    { id: 4, title: 'Interactive Portfolio App', category: 'React', featured: true },
    { id: 5, title: 'Cloud Data Pipeline', category: 'Cloud', featured: false },
    { id: 6, title: 'Mobile Social Client', category: 'Mobile', featured: false },
  ];

  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <div>
      <Header>
        <NavTitle>DevFolio.js</NavTitle>
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          {['All', 'React', 'Backend'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              // 3. INLINE STYLES
              style={{
                background: filter === cat ? '#3b82f6' : 'transparent',
                color: filter === cat ? '#ffffff' : '#9ca3af',
                border: '1px solid #374151',
                padding: '0.4rem 0.8rem',
                borderRadius: '0.375rem',
                cursor: 'pointer',
                fontWeight: filter === cat ? 'bold' : 'normal',
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </Header>

      <Container>
        <section css={heroSectionStyle}>
          <h2 style={{ fontSize: '2.25rem', marginBottom: '0.5rem' }}>
            Building Scalable, Beautiful Interfaces
          </h2>
          <p style={{ color: '#9ca3af', maxWidth: '600px' }}>
            Exploring modern UI/UX design paradigms, responsive CSS layouts, and CSS-in-JS architecture in React.
          </p>
        </section>

        <h3 style={{ borderLeft: '4px solid #3b82f6', paddingLeft: '0.75rem' }}>
          Featured Work ({filter})
        </h3>

        {/* 4. RESPONSIVE CSS GRID */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <Card key={project.id} isFeatured={project.featured}>
              {project.featured && (
                <span
                  style={{
                    backgroundColor: '#1d4ed8',
                    color: '#bfdbfe',
                    padding: '0.2rem 0.5rem',
                    borderRadius: '0.25rem',
                    fontSize: '0.75rem',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                  }}
                >
                  Featured
                </span>
              )}
              <h4 style={{ marginTop: project.featured ? '0.75rem' : '0', fontSize: '1.25rem' }}>
                {project.title}
              </h4>
              <p style={{ color: '#9ca3af', fontSize: '0.875rem', margin: '0.5rem 0' }}>
                Category: <strong>{project.category}</strong>
              </p>
              <Button>View Case Study</Button>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default App;