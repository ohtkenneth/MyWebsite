import React from 'react';
import styles from './Middle.css';
const Middle = () => {
  return (
    <div className={ styles.root }>
      <h2 className={ styles.text }>
        <span className={ styles.import }>import</span>
        <span className={ styles.from }>from</span>
        <span className={ styles.documentation }>'documentation'<span className={ styles.semi }>;</span></span>
      </h2>
      <div className={ styles.middle }>
        <div className={ styles.icon }>
          <svg viewBox="0 0 128 128">
            <path fill="#83CD29" d="M112.771 30.334l-44.097-25.605c-2.781-1.584-6.402-1.584-9.205 0l-44.568 25.605c-2.87 1.651-4.901 4.754-4.901 8.073v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623c-.712 0-2.306 1.061-2.306 1.773v50.49c0 3.896-3.524 7.773-10.11 4.48l-12.167-7.013c-.424-.23-.723-.693-.723-1.181v-51.142c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754c1.417.82 3.027 1.246 4.647 1.246 1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083v-51.142c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645.991 1.24.991h5.754c.354 0 .692-.143.94-.396.24-.272.367-.613.335-.979-.891-10.568-7.912-15.493-22.112-15.493-12.631 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.955-3.978 7.066-13.309 7.066z"></path>
          </svg>
        </div>
        <div className={ styles.icon }>
          {/* angular */}
          <svg viewBox="0 0 128 128">
            <path fill="#B3B3B3" d="M63.81 1.026l-59.257 20.854 9.363 77.637 49.957 27.457 50.214-27.828 9.36-77.635z"></path><path fill="#A6120D" d="M117.536 25.998l-53.864-18.369v112.785l45.141-24.983z"></path><path fill="#DD1B16" d="M11.201 26.329l8.026 69.434 44.444 24.651v-112.787z"></path><path fill="#F2F2F2" d="M78.499 67.67l-14.827 6.934h-15.628l-7.347 18.374-13.663.254 36.638-81.508 14.827 55.946zm-1.434-3.491l-13.295-26.321-10.906 25.868h10.807l13.394.453z"></path><path fill="#B3B3B3" d="M63.671 11.724l.098 26.134 12.375 25.888h-12.446l-.027 10.841 17.209.017 8.042 18.63 13.074.242z"></path>
          </svg>
        </div>
        <div className={ styles.icon }>
          {/* docker */}
          <svg viewBox="0 0 128 128">
            <path fill-rule="evenodd" clip-rule="evenodd" fill="#3A4D54" d="M73.8 50.8h11.3v11.5h5.7c2.6 0 5.3-.5 7.8-1.3 1.2-.4 2.6-1 3.8-1.7-1.6-2.1-2.4-4.7-2.6-7.3-.3-3.5.4-8.1 2.8-10.8l1.2-1.4 1.4 1.1c3.6 2.9 6.5 6.8 7.1 11.4 4.3-1.3 9.3-1 13.1 1.2l1.5.9-.8 1.6c-3.2 6.2-9.9 8.2-16.4 7.8-9.8 24.3-31 35.8-56.8 35.8-13.3 0-25.5-5-32.5-16.8l-.1-.2-1-2.1c-2.4-5.2-3.1-10.9-2.6-16.6l.2-1.7h9.6v-11.4h11.3v-11.2h22.5v-11.3h13.5v22.5z"></path><path fill="#00AADA" d="M110.4 55.1c.8-5.9-3.6-10.5-6.4-12.7-3.1 3.6-3.6 13.2 1.3 17.2-2.8 2.4-8.5 4.7-14.5 4.7h-72.2c-.6 6.2.5 11.9 3 16.8l.8 1.5c.5.9 1.1 1.7 1.7 2.6 3 .2 5.7.3 8.2.2 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5 1.1-8.3 1.3h-.6000000000000001c-1.3.1-2.7.1-4.2.1-1.6 0-3.1 0-4.9-.1 6 6.8 15.4 10.8 27.2 10.8 25 0 46.2-11.1 55.5-35.9 6.7.7 13.1-1 16-6.7-4.5-2.7-10.5-1.8-13.9-.1z"></path><path fill="#28B8EB" d="M110.4 55.1c.8-5.9-3.6-10.5-6.4-12.7-3.1 3.6-3.6 13.2 1.3 17.2-2.8 2.4-8.5 4.7-14.5 4.7h-68c-.3 9.5 3.2 16.7 9.5 21 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5.2 1.2-8.5 1.4l-.1-.1c8.5 4.4 20.8 4.3 35-1.1 15.8-6.1 30.6-17.7 40.9-30.9-.2.1-.4.1-.5.2z"></path><path fill="#028BB8" d="M18.7 71.8c.4 3.3 1.4 6.4 2.9 9.3l.8 1.5c.5.9 1.1 1.7 1.7 2.6 3 .2 5.7.3 8.2.2 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5.2 1.2-8.5 1.4h-.4c-1.3.1-2.7.1-4.1.1-1.6 0-3.2 0-4.9-.1 6 6.8 15.5 10.8 27.3 10.8 21.4 0 40-8.1 50.8-26h-85.1v-.1z"></path><path fill="#019BC6" d="M23.5 71.8c1.3 5.8 4.3 10.4 8.8 13.5 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5.2 1.2-8.6 1.4 8.5 4.4 20.8 4.3 34.9-1.1 8.5-3.3 16.8-8.2 24.2-14.1h-70.6z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#00ACD3" d="M28.4 52.7h9.8v9.8h-9.8v-9.8zm.8.8h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zM39.6 41.5h9.8v9.8h-9.8v-9.8zm.9.8h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#23C2EE" d="M39.6 52.7h9.8v9.8h-9.8v-9.8zm.9.8h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#00ACD3" d="M50.9 52.7h9.8v9.8h-9.8v-9.8zm.8.8h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#23C2EE" d="M50.9 41.5h9.8v9.8h-9.8v-9.8zm.8.8h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zM62.2 52.7h9.8v9.8h-9.8v-9.8zm.8.8h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#00ACD3" d="M62.2 41.5h9.8v9.8h-9.8v-9.8zm.8.8h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#23C2EE" d="M62.2 30.2h9.8v9.8h-9.8v-9.8zm.8.8h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#00ACD3" d="M73.5 52.7h9.8v9.8h-9.8v-9.8zm.8.8h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#D4EEF1" d="M48.8 78.3c1.5 0 2.7 1.2 2.7 2.7 0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#3A4D54" d="M48.8 79.1c.2 0 .5 0 .7.1-.2.1-.4.4-.4.7 0 .4.4.8.8.8.3 0 .6-.2.7-.4.1.2.1.5.1.7 0 1.1-.9 1.9-1.9 1.9-1.1 0-1.9-.9-1.9-1.9 0-1 .8-1.9 1.9-1.9M1.1 72.8h125.4c-2.7-.7-8.6-1.6-7.7-5.2-5 5.7-16.9 4-20 1.2-3.4 4.9-23 3-24.3-.8-4.2 5-17.3 5-21.5 0-1.4 3.8-21 5.7-24.3.8-3 2.8-15 4.5-20-1.2 1.1 3.5-4.9 4.5-7.6 5.2"></path><path fill="#BFDBE0" d="M56 97.8c-6.7-3.2-10.3-7.5-12.4-12.2-2.5.7-5.5 1.2-8.9 1.4-1.3.1-2.7.1-4.1.1-1.7 0-3.4 0-5.2-.1 6 6 13.6 10.7 27.5 10.8h3.1z"></path><path fill="#D4EEF1" d="M46.1 89.9c-.9-1.3-1.8-2.8-2.5-4.3-2.5.7-5.5 1.2-8.9 1.4 2.3 1.2 5.7 2.4 11.4 2.9z"></path>
          </svg>
        </div>
        <div className={ styles.icon }>
          {/* aws */}
          <svg viewBox="0 0 128 128">
            <path fill="#201C1D" d="M44.634 57.361c-2.599 0-5.499 1.001-6.107 4.296-.064.351.167.517.391.567l2.663.32c.246-.014.414-.28.461-.533.228-1.134 1.16-1.669 2.201-1.669.563 0 1.193.193 1.527.71.381.576.354 1.359.354 2.024v.391c-1.582.182-3.666.292-5.147.958-1.709.76-2.912 2.307-2.912 4.58 0 2.913 1.785 4.366 4.083 4.366 1.94 0 3.013-.456 4.509-2.022.497.738.656 1.073 1.562 1.846.202.108.458.098.64-.071v.035c.545-.497 1.535-1.401 2.094-1.881.222-.187.174-.493 0-.746-.5-.707-1.029-1.276-1.029-2.592v-4.366c0-1.85.156-3.556-1.172-4.828-1.046-1.031-2.791-1.385-4.118-1.385zm35.786 0c-2.6 0-5.498 1.001-6.106 4.296-.064.351.166.517.39.567l2.664.32c.246-.014.415-.28.461-.533.229-1.134 1.161-1.669 2.201-1.669.564 0 1.193.193 1.526.71.381.576.319 1.359.319 2.024v.391c-1.582.182-3.63.292-5.112.958-1.711.76-2.91 2.307-2.91 4.58 0 2.913 1.785 4.366 4.082 4.366 1.938 0 3.011-.456 4.509-2.022.495.738.656 1.073 1.563 1.846.203.108.458.098.639-.071v.035c.546-.497 1.537-1.401 2.095-1.881.222-.187.171-.493 0-.746-.5-.707-1.03-1.276-1.03-2.592v-4.366c0-1.85.12-3.556-1.206-4.828-1.05-1.031-2.759-1.385-4.085-1.385zm-20.13.142c-1.68 0-2.924.848-3.585 2.663h-.036v-1.882c-.018-.262-.23-.483-.496-.497h-2.557c-.29 0-.533.245-.533.533v14.378c.022.255.238.479.498.497h2.733c.292 0 .531-.243.532-.533v-7.633c0-1.664-.08-3.94 1.882-3.94 1.937 0 1.668 2.339 1.668 3.94v7.633c0 .271.222.515.498.533h2.733c.29 0 .532-.243.532-.533v-7.633c0-.816-.033-2.006.248-2.733s.971-1.207 1.634-1.207c.789 0 1.394.275 1.598 1.242.126.575.071 2.094.071 2.698v7.633c0 .271.222.515.496.533h2.734c.29 0 .532-.243.532-.533v-9.088c0-1.545.154-3.298-.71-4.509-.765-1.088-2.015-1.563-3.16-1.563-1.605 0-3.101.848-3.763 2.663-.764-1.814-1.842-2.662-3.549-2.662zm46.472 0c-3.949 0-6.142 3.473-6.142 7.953 0 4.448 2.167 8.022 6.142 8.022 3.823 0 6.249-3.492 6.249-7.881 0-4.537-2.198-8.094-6.249-8.094zm15.585 0c-1.887 0-2.966.943-3.728 2.911h-.035v-2.201c-.049-.222-.258-.377-.497-.39h-2.521c-.275 0-.508.199-.533.461v14.378c0 .271.225.515.497.533h2.699c.289 0 .527-.242.531-.533v-7.739c0-.97.083-1.855.463-2.733.306-.697.899-1.137 1.562-1.137 1.883 0 1.703 2.295 1.703 3.87v7.811c.028.244.249.445.498.462h2.733c.269 0 .501-.204.532-.462v-9.053c0-1.392.003-3.324-.71-4.474-.764-1.241-1.975-1.704-3.194-1.704zm-32.803.249c-.278 0-.497.22-.498.532v2.059c.001.31.213.531.498.533h4.686l-5.361 7.916c-.326.511-.354 1.089-.354 1.421v2.095c0 .302.328.63.639.461 3.056-1.668 6.717-1.52 9.479-.035.336.183.675-.16.675-.462v-2.202c-.026-.294-.142-.576-.497-.781-1.568-.901-3.388-1.178-5.111-1.136l4.65-6.815c.43-.613.67-.981.674-1.279v-1.774c0-.306-.209-.532-.496-.532h-8.984zm17.218 2.698c.865 0 1.504.386 1.811 1.384.354 1.152.391 2.588.391 3.799 0 1.846-.086 4.899-2.201 4.899-2.139 0-2.13-3.78-2.13-5.538-.001-1.753.117-4.544 2.129-4.544zm-60.673 5.254v.604c0 1.092.04 2.01-.497 2.981-.434.79-1.116 1.279-1.881 1.279-1.045 0-1.668-.849-1.668-2.06-.001-2.387 2.074-2.804 4.046-2.804zm35.786 0v.604c0 1.092.04 2.01-.496 2.981-.435.79-1.112 1.279-1.882 1.279-1.047 0-1.669-.849-1.669-2.06 0-2.387 2.073-2.804 4.047-2.804z"></path><path d="M99.59 73.656v2.06h1.386v-2.06h-1.386zm-40.152.356v14.662h1.278v-1.314c.272.521.582.91.958 1.171.376.262.806.391 1.277.391.939 0 1.75-.479 2.45-1.455.701-.977 1.065-2.392 1.065-4.189 0-1.178-.151-2.154-.462-2.981-.311-.826-.725-1.441-1.242-1.847-.519-.406-1.107-.639-1.739-.639-.452 0-.874.118-1.244.354-.368.236-.666.622-.958 1.101v-5.254h-1.383zm13.135 3.443c-.962 0-1.728.285-2.271.852s-.815 1.296-.815 2.202c0 .525.115.972.318 1.384.202.413.49.748.852.994.364.246 1.09.57 2.166.923.745.24 1.19.444 1.385.604.281.233.427.538.427.959 0 .486-.17.892-.498 1.207-.328.317-.786.461-1.385.461-.6 0-1.094-.168-1.455-.532-.362-.364-.557-.918-.64-1.668l-1.384.283c.313 2.278 1.449 3.41 3.408 3.408 1.045 0 1.844-.295 2.449-.923.604-.628.924-1.471.924-2.485 0-.548-.098-1.022-.284-1.419-.188-.397-.445-.693-.782-.924-.336-.229-1.089-.536-2.236-.923-.834-.292-1.321-.506-1.49-.64-.284-.224-.427-.53-.427-.922 0-.4.133-.739.427-.995.294-.255.747-.39 1.349-.39 1.058 0 1.65.581 1.774 1.739l1.35-.213c-.094-.732-.253-1.312-.496-1.705-.245-.392-.605-.724-1.065-.958-.465-.232-.992-.319-1.601-.319zm8.486 0c-1.109 0-2.046.457-2.77 1.42-.723.963-1.063 2.358-1.063 4.189 0 1.764.348 3.146 1.063 4.083.718.934 1.646 1.384 2.806 1.384.921 0 1.685-.276 2.307-.852.624-.575 1.077-1.423 1.313-2.557l-1.42-.248c-.407 1.451-1.16 2.163-2.2 2.165-.664 0-1.206-.281-1.669-.887-.464-.607-.726-1.507-.78-2.698h6.105v-.497c0-1.792-.357-3.137-1.065-4.083-.709-.945-1.569-1.419-2.627-1.419zm8.414 0c-.331 0-.621.112-.888.355-.267.242-.567.744-.888 1.49v-1.633h-1.243v10.615h1.385v-5.538c0-.772.074-1.516.249-2.201.1-.394.289-.703.532-.923.244-.221.523-.32.816-.32.326 0 .65.131.994.391l.462-1.668c-.482-.386-.955-.568-1.419-.568zm16.969 0c-1.096 0-1.999.462-2.699 1.385-.696.923-1.063 2.309-1.063 4.153 0 1.831.372 3.218 1.063 4.154.693.934 1.559 1.384 2.628 1.384.884 0 1.642-.328 2.272-.994.63-.665 1.014-1.646 1.172-2.911l-1.35-.213c-.101.905-.336 1.557-.71 1.988-.373.43-.823.639-1.349.639-.67 0-1.241-.313-1.67-.958-.427-.646-.638-1.68-.638-3.124 0-1.4.227-2.41.674-3.053.448-.644 1.021-.994 1.704-.994.457 0 .847.177 1.172.531.327.356.543.918.674 1.634l1.351-.283c-.162-1.119-.521-1.962-1.102-2.521-.58-.56-1.284-.817-2.129-.817zm7.917 0c-1.11 0-2.046.457-2.77 1.42-.723.963-1.065 2.358-1.065 4.189 0 1.764.349 3.146 1.065 4.083.719.934 1.646 1.384 2.805 1.384.918 0 1.685-.276 2.308-.852.622-.575 1.075-1.423 1.314-2.557l-1.42-.248c-.41 1.451-1.128 2.163-2.166 2.165-.664 0-1.241-.281-1.704-.887-.463-.607-.725-1.507-.781-2.698h6.106v-.497c0-1.792-.357-3.137-1.065-4.083-.706-.945-1.568-1.419-2.627-1.419zm8.202 0c-.966 0-1.729.285-2.272.852-.545.566-.817 1.296-.817 2.202 0 .525.082.972.284 1.384.2.413.489.748.853.994.361.246 1.09.57 2.166.923.743.24 1.226.444 1.42.604.281.233.426.538.426.959 0 .486-.168.892-.497 1.207-.326.317-.785.461-1.384.461-.602 0-1.094-.168-1.456-.532-.361-.364-.595-.918-.675-1.668l-1.384.283c.313 2.278 1.446 3.41 3.407 3.408 1.047 0 1.881-.295 2.485-.923s.922-1.471.922-2.485c0-.548-.096-1.022-.282-1.419-.188-.397-.479-.693-.817-.924-.336-.229-1.054-.536-2.2-.923-.835-.292-1.357-.506-1.527-.64-.283-.224-.426-.53-.426-.922 0-.4.167-.739.462-.995.294-.255.75-.39 1.35-.39 1.058 0 1.649.581 1.774 1.739l1.349-.213c-.094-.732-.252-1.312-.497-1.705-.244-.392-.605-.724-1.064-.958-.463-.232-.994-.319-1.6-.319zm-31.668.213l3.09 10.615h1.313l3.089-10.615h-1.42l-1.811 6.497c-.219.785-.413 1.464-.533 2.023-.15-.705-.296-1.446-.496-2.166l-1.775-6.354h-1.457zm8.697 0v10.615h1.386v-10.615h-1.386zm-45.513.143c-1.098 0-1.981.492-2.697 1.455-.717.963-1.102 2.358-1.102 4.189 0 1.765.355 3.113 1.065 4.047.709.935 1.657 1.42 2.806 1.42.911 0 1.655-.312 2.271-.888.616-.575 1.042-1.423 1.279-2.556l-1.385-.213c-.404 1.451-1.136 2.163-2.165 2.165-.659 0-1.21-.281-1.669-.888-.46-.606-.727-1.506-.781-2.697h6.035l.036-.497c0-1.792-.364-3.172-1.065-4.119-.701-.945-1.581-1.418-2.628-1.418zm-15.584.248l2.485 10.615h1.455l1.634-8.165.284 1.81 1.313 6.355h1.42l2.521-10.615h-1.313l-1.386 6.141-.462 2.06-.426-2.06-1.207-6.142h-1.42l-1.278 6.213-.426 2.201-.496-2.272-1.279-6.142h-1.419zm42.53.852c.69 0 1.258.333 1.704.994.306.452.506 1.14.567 2.059h-4.58c.044-.932.307-1.65.747-2.201.44-.55.943-.852 1.562-.852zm33.3 0c.688 0 1.258.333 1.704.994.308.452.506 1.14.569 2.059h-4.581c.044-.932.308-1.65.746-2.201.437-.55.943-.852 1.562-.852zm-60.246.39c.682 0 1.23.334 1.67.995.304.452.505 1.14.567 2.059h-4.51c.043-.932.275-1.687.711-2.236.434-.552.948-.818 1.562-.818zm8.805 0c.615 0 1.14.342 1.563.995.423.652.604 1.659.604 3.053 0 1.357-.2 2.37-.64 3.053-.439.684-.96 1.029-1.526 1.029-.416 0-.794-.14-1.136-.426-.344-.286-.595-.696-.782-1.242-.186-.546-.283-1.387-.283-2.485 0-1.294.231-2.263.674-2.947.443-.684.96-1.03 1.526-1.03z"></path><path fill="#F7A80D" d="M18.594 68.048l-5.29 2.271 4.899 2.095 5.681-2.095-5.29-2.271zm-7.952 2.839l-.178 10.226 7.74 3.408v-10.616l-7.562-3.018zm15.904 0l-6.994 2.663v10.012l6.994-2.84v-9.835zM34.889 39.078l-5.326 2.271 4.935 2.095 5.681-2.095-5.29-2.271zm-7.385 3.018v10.224l6.604 1.917.213-9.302-6.817-2.839zm14.769.567l-6.249 2.663v10.047l6.249-2.84v-9.87zM9.877 53.468l-5.29 2.272 4.899 2.095 5.68-2.095-5.289-2.272zm-7.951 2.841l-.178 10.224 7.739 3.408v-10.615l-7.561-3.017zm15.904 0l-6.994 2.662v10.012l6.994-2.84v-9.834zM26.918 53.091l-5.29 2.271 4.899 2.094 5.68-2.094-5.289-2.271zm-7.952 2.839l-.177 10.225 7.739 3.408v-10.615l-7.562-3.018zm15.905 0l-6.994 2.663v10.012l6.994-2.841v-9.834zM51.533 39.078l-5.289 2.271 4.899 2.095 5.681-2.095-5.291-2.271zm-7.952 2.84l-.178 10.225 7.74 3.407v-10.614l-7.562-3.018zm15.904 0l-6.994 2.663v10.011l6.994-2.84v-9.834z"></path>
          </svg>
        </div>
      </div>  
    </div>
  );
};

export default Middle;