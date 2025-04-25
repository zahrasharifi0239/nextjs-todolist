const Moon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    height="1em"
    width="1em"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M10 6a8 8 0 0011.955 6.956C21.474 18.03 17.2 22 12 22 6.477 22 2 17.523 2 12c0-5.2 3.97-9.474
	  9.044-9.955A7.963 7.963 0 0010 6zm-6 6a8 8 0 008 8 8.006 8.006 0 006.957-4.045c-.316.03-.636.045-.957.045-5.523
	   0-10-4.477-10-10 0-.321.015-.64.045-.957A8.006 8.006 0 004 12zm14.164-9.709L19 2.5v1l-.836.209a2 2 0
	   00-1.455 1.455L16.5 6h-1l-.209-.836a2 2 0 00-1.455-1.455L13 3.5v-1l.836-.209A2 2 0 0015.29.836L15.5
		0h1l.209.836a2 2 0 001.455 1.455zm5 5L24 7.5v1l-.836.209a2 2 0 00-1.455 1.455L21.5 11h-1l-.209-.836a2 2
		 0 00-1.455-1.455L18 8.5v-1l.836-.209a2 2 0 001.455-1.455L20.5 5h1l.209.836a2 2 0 001.455 1.455z"
    />
  </svg>
);

const Sun = (props: React.SVGProps<SVGSVGElement>) => (
  <svg fill="none" viewBox="0 0 24 24" height="1em" width="1em" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 16a4 4 0 100-8 4 4 0 000 8zm0 2a6 6 0 100-12 6 6 0 000
		12zM11 0h2v4.062a8.079 8.079 0 00-2 0V0zM7.094 5.68L4.222 2.808 2.808 4.222 5.68 7.094A8.048
		8.048 0 017.094 5.68zM4.062 11H0v2h4.062a8.079 8.079 0 010-2zm1.618 5.906l-2.872 2.872 1.414
		 1.414 2.872-2.872a8.048 8.048 0 01-1.414-1.414zM11 19.938V24h2v-4.062a8.069 8.069 0 01-2
		  0zm5.906-1.618l2.872 2.872 1.414-1.414-2.872-2.872a8.048 8.048 0 01-1.414 1.414zM19.938
		  13H24v-2h-4.062a8.069 8.069 0 010 2zM18.32 7.094l2.872-2.872-1.414-1.414-2.872 2
		  .872c.528.41 1.003.886 1.414 1.414z"
      clipRule="evenodd"
    />
  </svg>
);
const Delete = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  </svg>
);

const Update = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  </svg>
);

const Edit = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
    />
  </svg>
);
const Plus = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-7"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 4.5v15m7.5-7.5h-15"
    />
  </svg>
);
const Gmail = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 36 36"
    {...props}
  >
    <g id="SVGRepo_iconCarrier">
      <path
        fill="currentColor"
        id="Gmail"
        d="M25.49 30H4.5A3.35 3.35 0 0 1 2 29a3.35 3.35 0 0 1-1-2.48V5.5A3.35 3.35 0 0 1 2 3a3.35 3.35 0 0 1 2.5-1h21A3.35 3.35 0 0 1 28 3a3.35 3.35 0 0 1 1 2.5v21a3.52 3.52 0 0 1-3.51 3.5m-3-7.17a2.93 2.93 0 0 0 1.71-.37 1.41 1.41 0 0 0 .49-1.22V10.36a1.55 1.55 0 0 0-.47-1.13 1.5 1.5 0 0 0-1.13-.47H6.83a1.55 1.55 0 0 0-1.13.47 1.53 1.53 0 0 0-.47 1.12v10.89a1.53 1.53 0 0 0 .47 1.12 1.55 1.55 0 0 0 1.13.47Zm-14.7-.76v-8.93l6.46 4.45Zm14.14.37H8l6.63-4.63a.6.6 0 0 0 .34.16 1 1 0 0 0 .33-.16Zm-7-8.15L8 9.16h13.9Zm7.14 7.78-6.46-4.48 6.46-4.45Z"
      ></path>
    </g>
  </svg>
);
const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      fill="currentColor"
      d="M19.707 3H4.347a1.3 1.3 0 0 0-1.306 1.306v15.388c0 .696.58 1.306 1.306 1.306h15.3a1.3 1.3 0 0 0 1.307-1.306V4.277C21.013 3.581 20.432 3 19.707 3M8.354 18.3H5.713V9.735h2.642zM7.019 8.545a1.53 1.53 0 0 1-1.538-1.539c0-.841.696-1.538 1.538-1.538s1.54.697 1.54 1.538s-.64 1.54-1.54 1.54M18.371 18.3h-2.642v-4.152c0-.987-.029-2.293-1.393-2.293c-1.394 0-1.597 1.103-1.597 2.206V18.3h-2.642V9.735h2.584v1.19h.029c.377-.696 1.22-1.393 2.526-1.393c2.7 0 3.193 1.742 3.193 4.123V18.3z"
    ></path>
  </svg>
);
const Github = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4.44c-.32-.07-.33-.68-.33-.89l.01-2.47c0-.84-.29-1.39-.61-1.67c2.01-.22 4.11-.97 4.11-4.44c0-.98-.35-1.79-.92-2.42c.09-.22.4-1.14-.09-2.38c0 0-.76-.23-2.48.93c-.72-.2-1.48-.3-2.25-.31c-.76.01-1.54.11-2.25.31c-1.72-1.16-2.48-.93-2.48-.93c-.49 1.24-.18 2.16-.09 2.38c-.57.63-.92 1.44-.92 2.42c0 3.47 2.1 4.22 4.1 4.47c-.26.2-.49.6-.57 1.18c-.52.23-1.82.63-2.62-.75c0 0-.48-.86-1.38-.93c0 0-.88 0-.06.55c0 0 .59.28 1 1.32c0 0 .52 1.75 3.03 1.21l.01 1.53c0 .21-.02.82-.34.89H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"
      fill="currentColor"
    ></path>
  </svg>
);
const Up = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 256 256"
    enableBackground="new 0 0 256 256"
    xmlSpace="preserve"
    {...props}
  >
    <metadata>
      {" Svg Vector Icons : http://www.onlinewebfonts.com/icon "}
    </metadata>
    <g>
      <g>
        <path
          fill="currentColor"
          d="M204,118.7h-82.7c-3.9,0-7.1,3.2-7.1,7.1c0,3.9,3.2,7.1,7.1,7.1H204c3.9,0,7.1-3.2,7.1-7.1S207.9,118.7,204,118.7z"
        />
        <path
          fill="currentColor"
          d="M238.9,68.8H121.3c-3.9,0-7.1,3.2-7.1,7.1c0,3.9,3.2,7.1,7.1,7.1h117.7c3.9,0,7.1-3.2,7.1-7.1C246,71.9,242.8,68.8,238.9,68.8z"
        />
        <path
          fill="currentColor"
          d="M183.1,168.7h-61.8c-3.9,0-7.1,3.2-7.1,7.1s3.2,7.1,7.1,7.1h61.8c3.9,0,7.1-3.2,7.1-7.1S187,168.7,183.1,168.7z"
        />
        <path
          fill="currentColor"
          d="M158.6,215.2h-37.3c-3.9,0-7.1,3.2-7.1,7.1c0,3.9,3.2,7.1,7.1,7.1h37.3c3.9,0,7.1-3.2,7.1-7.1C165.7,218.4,162.5,215.2,158.6,215.2z"
        />
        <path
          fill="currentColor"
          d="M55.9,19.6L10,71.7h38.9c0,54.9,0,109.8,0,164.7c4.7,0,9.5,0,14.2,0c0-54.9,0-109.8,0-164.7h38.8L55.9,19.6z"
        />
      </g>
    </g>
  </svg>
);
const Down = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    width={256}
    height={256}
    {...props}
  >
    <style />
    <path
      fill="currentColor"
      d="m204 118.7h-82.7c-3.9 0-7.1 3.2-7.1 7.1 0 3.9 3.2 7.1 7.1 7.1h82.7c3.9 0 7.1-3.2 7.1-7.1 0-3.9-3.2-7.1-7.1-7.1z"
    />
    <path
      fill="currentColor"
      d="m238.9 68.8h-117.6c-3.9 0-7.1 3.2-7.1 7.1 0 3.9 3.2 7.1 7.1 7.1h117.7c3.9 0 7.1-3.2 7.1-7.1-0.1-4-3.3-7.1-7.2-7.1z"
    />
    <path
      fill="currentColor"
      d="m183.1 168.7h-61.8c-3.9 0-7.1 3.2-7.1 7.1 0 3.9 3.2 7.1 7.1 7.1h61.8c3.9 0 7.1-3.2 7.1-7.1 0-3.9-3.2-7.1-7.1-7.1z"
    />
    <path
      fill="currentColor"
      d="m158.6 215.2h-37.3c-3.9 0-7.1 3.2-7.1 7.1 0 3.9 3.2 7.1 7.1 7.1h37.3c3.9 0 7.1-3.2 7.1-7.1 0-3.9-3.2-7.1-7.1-7.1z"
    />
    <path
      fill="currentColor"
      d="m57.1 236.4l45.4-52.6-38.9 0.4q-0.9-82.3-1.7-164.7c-4.7 0.1-9.5 0.1-14.2 0.2q0.8 82.3 1.7 164.7l-38.8 0.4z"
    />
  </svg>
);

export const Icons = {
  Moon,
  Sun,
  Delete,
  Update,
  Edit,
  Plus,
  Gmail,
  Linkedin,
  Github,
  Up,
  Down,
};
