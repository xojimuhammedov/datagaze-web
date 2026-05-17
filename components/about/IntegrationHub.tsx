
const YellowSphereIcon = () => (
    <svg width="58%" height="58%" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <rect width="41" height="41" fill="url(#pattern_sphere)" />
        <defs>
            <pattern id="pattern_sphere" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlinkHref="#img_sphere" transform="scale(0.030303)" />
            </pattern>
            <image id="img_sphere" width="33" height="33" preserveAspectRatio="none"
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAYAAABX5MJvAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAIaADAAQAAAABAAAAIQAAAAAWQIAAAAACUklEQVRYCe1YPWgUQRR+b2ZuPUOKFJocXJAFQS1SnFhoRI9cZZNCsLFQUFBII6SxSGWR0kJLwSYQwSqgaGO1Ej20ULSwUFA8BOW0OvKDm2RnXmZXdk3WcZljd7lCr5mZN/O+982bv28PoY8fvai5KoBLjEkO4DRAbTUAsRZBEHV1/SOgeq4Ul0zAAk52OzbwaDOIlkcvgODHQKlZm/HJGMbuQIBPsPntQWIzVOxItOsNg6+9aajSwaOdnr3DAEYaM0HPDkwD88+VwkeKh+nlMZN4444kBKQj4OfKZ0AaTmx5K4ouYvPHvRjGSCLujEvyQIAzejdu5y6R+7Bx+Dq2nq7lxioKIMkEeQcnwPFFUcBWOLji48nV90lQVVmbBoVVkzNDumGy57bRUEDe6t4kE1mA5NWmoMJvAQT57gtjEH7NaP4njUgv6+MUwKNBzt5uT7T33wdi58siakUiDE5e/YTk8khZRAaOi9R2G1L6JRw9+7kJ/Vr2tA7KfutRLRb6gKX4We2JUNZpVTVPVJlI+f9vFpqBaDkiIcudvysp2jpbaNSdYAqu2u2J5bErwGBe+/6S9ztB8tV9PPXd7hUN49CrQ/tgY308X8yU92Y1wNandynrYJq7loO8qWHY8+EmkDSKm8IoRhpzbA5bb6P7aReJMIgWtVUYcX+TCNW2v+5pQVPYHSEVXhbN7kI8qT9IxB3pUp+gGeBwPG3vu62qS3j6y+O+/cp2sMoElfwtmqjtzNlKckHQGf1+zGSOS3cydhsC+Rp6XzOPoVUmYuyy/p/YBpfswCUq/EFBAAAAAElFTkSuQmCC"
            />
        </defs>
    </svg>
);

const PurpleSquaresIcon = () => (
    <svg width="50%" height="50%" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask_squares" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="42" height="42">
            <path d="M0 0H42V42H0V0Z" fill="white" />
        </mask>
        <g mask="url(#mask_squares)">
            <path d="M37.9092 4.08929H20.9972V16.9133H25.0866V8.17729H37.9106V21.0013H4.0838V41.9999H25.0824V25.0879H41.9944V4.08789H37.905H37.9078L37.9092 4.08929ZM21.0014 33.8253V37.9133H8.1746V25.0879H20.9986V33.8211L21.0014 33.8253Z" fill="#474FBA" />
            <path d="M16.912 33.824H8.17599V37.9148L16.912 37.9106H21.0028V25.0866H16.912V33.824ZM37.9106 0H16.912V16.912H21.0014V4.0894H42L37.9106 0Z" fill="#9DA3F0" />
            <path d="M33.824 8.17871V16.9119H0V37.9119L0.0364 37.9161V37.9525L4.0894 41.9999V21.0013H37.9106V8.17871H33.824Z" fill="#7B83EB" />
        </g>
    </svg>
);

const GreenWIcon = () => (
    <svg width="60%" height="54%" viewBox="0 0 60 46" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 5L16 36L26 12L30 21L34 12L44 36L54 5" stroke="#3dba82" strokeWidth="7" strokeLinejoin="round" strokeLinecap="round" fill="none" />
        <path d="M6 5L16 36L26 12L30 21L34 12L44 36L54 5" stroke="#2e9d6e" strokeWidth="5" strokeLinejoin="round" strokeLinecap="round" fill="none" />
        <path d="M6 5L16 36L26 12L30 21L34 12L44 36L54 5" stroke="#48c896" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" fill="none" />
    </svg>
);

const BlueDIcon = () => (
    <svg width="100%" viewBox="0 0 91 130" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <filter id="fd0" x="0" y="76.9829" width="90.9139" height="60.0171" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="3" /><feGaussianBlur stdDeviation="5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
            </filter>
            <filter id="fd1" x="20.8261" y="17.6289" width="59.6768" height="46.7974" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="3" /><feGaussianBlur stdDeviation="5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
            </filter>
            <filter id="fd2" x="0" y="0" width="80.5017" height="131.126" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="3" /><feGaussianBlur stdDeviation="5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
            </filter>
        </defs>
        <g filter="url(#fd0)">
            <path d="M70.5017 83.9829L60.0892 89.8566L30.8246 106.379L20.4124 112.253L10 118.126L20.4124 124L30.8246 118.126L60.0892 101.612L70.5017 95.7383L80.9139 89.8647L70.5017 83.9829Z" fill="#1153E3" />
        </g>
        <g filter="url(#fd1)">
            <path d="M60.0904 51.4261L70.5029 47.0167L60.0904 41.1433L30.8261 24.6289V34.9117L60.0904 51.4261Z" fill="#1153E3" />
        </g>
        <path d="M70.501 35.2698L60.0888 29.388L30.8242 12.8737L20.4115 7V101.97L30.824 96.0962V24.6289L60.0886 41.1432L70.5008 47.0169V83.9831L80.9132 89.8646V41.1432L70.501 35.2698Z" fill="#2563EB" />
        <g filter="url(#fd2)">
            <path d="M60.0895 51.426V79.5737L30.8249 96.0962L20.4127 101.97V7L10 12.8737V118.126L20.4124 112.253L30.8246 106.379L60.0892 89.8565L70.5017 83.9829V47.0167L60.0895 51.426Z" fill="#7BA4FF" />
        </g>
    </svg>
);

const TriangleIcon = () => (
    <svg width="55%" height="50%" viewBox="0 0 49 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <clipPath id="clip_tri">
                <rect width="49" height="42" fill="white" />
            </clipPath>
        </defs>
        <g clipPath="url(#clip_tri)">
            <mask id="mask_tri" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="49" height="42">
                <path d="M0.246399 0H49V42H0.246399V0Z" fill="white" />
            </mask>
            <g mask="url(#mask_tri)">
                <path d="M27.356 9.4206L24.6246 4.7096L21.8904 0L19.1562 4.7096L2.9764 32.5836L0.246399 37.2904L2.9806 42L5.7106 37.2904L8.4462 32.5836L21.8904 9.422L24.6246 14.126L35.3346 32.585H40.8002L27.3546 9.422L27.356 9.4206Z" fill="#41A5EE" />
                <path d="M46.2686 32.5836L30.0888 4.7096L27.356 0H21.8904L24.626 4.7096L27.356 9.4206L40.8002 32.5836H13.9104L11.1804 37.2904H48.9986L46.2686 32.5836Z" fill="#2B7CD3" />
                <path d="M43.5344 37.2902H11.1804L13.9104 32.5848L24.6246 14.1258L21.8904 9.42041L8.44479 32.5834L5.71059 37.2902L2.98199 41.9998H46.27L49 37.2902H43.5344Z" fill="#103F91" />
            </g>
        </g>
    </svg>
);

const RadarArcs = () => (
    <img
        src="/circle.jpg"
        alt="Radar Arcs"
        style={{ width: "100%", height: "100%", pointerEvents: "none" }}
    />
);

const IconCard = ({ style, children }: { style: React.CSSProperties, children: React.ReactNode }) => {
    return (
        <div
            style={{
                position: "absolute",
                borderRadius: "50%",
                background: "#ffffff",
                boxShadow: "0 8px 32px rgba(100,120,220,0.13), 0 2px 8px rgba(80,100,200,0.07)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transform: `translate(-50%, -50%)`,
                cursor: "default",
                zIndex: 100,
                ...style,
            }}
        >
            <div className="flex items-center justify-center w-full h-full">
                {children}
            </div>
        </div>
    );
};

export default function IntegrationHub() {
    return (
        <div>
            <div
                style={{
                    position: "relative",
                    width: "478px",
                    height: "496px",
                    overflow: "hidden",
                }}
            >
                <RadarArcs />

                {/* Top-left: Yellow Sphere */}
                <IconCard
                    style={{
                        width: "85px",
                        height: "85px",
                        left: "30%",
                        top: "2%",
                    }}
                >
                    <div className="w-full h-full flex items-center justify-center">
                        <YellowSphereIcon />
                    </div>
                </IconCard>

                {/* Middle: Purple Squares */}
                <IconCard style={{ width: "85px", height: "85px", left: "42%", top: "45%" }}>
                    <PurpleSquaresIcon />
                </IconCard>

                {/* Right-middle: Green W */}
                <IconCard style={{ width: "85px", height: "85px", left: "91%", top: "49%" }}>
                    <img src="/waff/waff_logo.svg" alt="" />
                </IconCard>

                {/* Bottom-left: Large Blue D (with card) */}
                <IconCard style={{ width: "180px", height: "180px", left: "18%", top: "84%" }}>
                    <div className="w-20 flex items-center justify-center"><BlueDIcon /></div>
                </IconCard>

                {/* Bottom-center-right: Triangle */}
                <IconCard style={{ width: "85px", height: "85px", left: "62%", top: "82%" }}>
                    <TriangleIcon />
                </IconCard>
            </div>
        </div>
    );
}
