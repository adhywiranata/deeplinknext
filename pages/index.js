import Head from 'next/head'

export default function Home() {
  return (
    <div style={{ paddingLeft: 20 }}>
      <p>List of upcoming Flight</p>
      <div style={{ padding: 20 }}>
        <h3>Flight One</h3>
        <a href="https://deeplinknext.vercel.app/other">
          <button style={{ border: 0, background: '#007bff', padding: '6px 8px', color: 'white', borderRadius: 6, fontSize: 14 }}>Online Checkin Now</button>
        </a>
      </div>
      <div style={{ padding: 20 }}>
        <h3>Flight Two</h3>
        <a href="https://deeplinknext.vercel.app/other">
          <button style={{ border: 0, background: '#007bff', padding: '6px 8px', color: 'white', borderRadius: 6, fontSize: 14 }}>Online Checkin Now</button>
        </a>
      </div>
      <div style={{ padding: 20 }}>
        <h3>Flight Three</h3>
        <a href="https://deeplinknext.vercel.app/other">
          <button style={{ border: 0, background: '#007bff', padding: '6px 8px', color: 'white', borderRadius: 6, fontSize: 14 }}>Online Checkin Now</button>
        </a>
      </div>
    </div>
  )
}
