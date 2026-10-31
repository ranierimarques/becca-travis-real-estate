import Image from 'next/image'

const photographs = [
  {
    src: '/images/home-inspiration/big-spring-red-bridge.webp',
    alt: 'Red bridge crossing the water at Big Spring Park in Huntsville',
    caption: 'Big Spring Park',
    width: 480,
    height: 360,
  },
  {
    src: '/images/home-inspiration/space-center-exhibit.webp',
    alt: 'Outdoor rocket hardware display at the U.S. Space and Rocket Center',
    caption: 'U.S. Space & Rocket Center',
    width: 553,
    height: 311,
  },
  {
    src: '/images/home-inspiration/monte-sano-overlook.webp',
    alt: 'Wooded hills viewed from an overlook in the Monte Sano area',
    caption: 'Monte Sano area',
    width: 480,
    height: 360,
  },
]

export function LocalPhotoGallery() {
  return (
    <section className="local-photos" aria-labelledby="local-photos-title">
      <div className="local-inner">
        <h2 id="local-photos-title">A few places around Huntsville</h2>
        <p>Photographs from Becca’s photo library.</p>
        <div className="photo-grid">
          {photographs.map(photo => (
            <figure key={photo.src}>
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                sizes="(max-width: 700px) 90vw, 30vw"
              />
              <figcaption>{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
      <style jsx>{`
        .local-photos {
          background: #fbf7f5;
          padding: 60px 24px;
        }
        .local-inner {
          max-width: 1072px;
          margin: 0 auto;
        }
        h2 {
          color: #59223f;
          font-size: clamp(27px, 3vw, 36px);
          font-weight: 500;
          line-height: 1.2;
        }
        p {
          color: #655a60;
          font-size: 15px;
          margin: 10px 0 24px;
        }
        .photo-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }
        figure {
          margin: 0;
        }
        figure :global(img) {
          width: 100%;
          aspect-ratio: 4 / 3;
          object-fit: cover;
          border-radius: 8px;
        }
        figcaption {
          color: #51464c;
          font-size: 13px;
          font-weight: 600;
          margin-top: 9px;
        }
        @media (max-width: 700px) {
          .photo-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .local-photos {
            padding: 44px 20px;
          }
        }
      `}</style>
    </section>
  )
}
