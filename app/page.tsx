import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row items-center justify-between">
      <div className="info-container">
        <div className="justify-between">
          <div className="logo-container">
            <a href=".">
              <Image alt={"logo"} src={'/logo.png'} height={150} width={150}/>
            </a>
          </div>
          <h1 className="mb-7">Upgrade your rewards system today.</h1>
          <h2 className="mb-5">Looking to upgrade your rewards system? PunchIt is a one stop location to track customer
            behavior while imporving loyalty.
          </h2>
          <div>
            <ul>
              <li><span>All features and premium support</span></li>
              <li><span>30-day free trial</span></li>
              <li><span>Consumer behavior analytics</span></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="image-container">
        <Image alt={"graphic"} src='/graphic-2.png' height={600} width={600}/>
      </div>
    </main>
  )
}