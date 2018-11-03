import React from 'react';
import styles from './Deployment.css';

const Deployment = () => {
  return (
    <div className={ styles.root }>
      <div className={ styles.icons }>
        {/* docker */}
        <div className={ styles.icon}>
          <svg viewBox="0 0 256 215" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M38.617 173.984v-16.362c0-2.15 1.344-3.877 3.57-3.877h.616c2.225 0 3.563 1.729 3.563 3.877v34.447c0 8.4-4.15 15.084-11.382 19.342a21.374 21.374 0 0 1-10.945 2.985h-1.537c-8.402 0-15.077-4.153-19.342-11.38a21.314 21.314 0 0 1-2.984-10.947v-1.535c0-8.403 4.152-15.083 11.378-19.349a21.298 21.298 0 0 1 10.948-2.985h1.537c5.686 0 10.51 2.204 14.578 5.784zM7.924 191.3c0 6.068 2.941 10.63 8.258 13.54 2.15 1.176 4.484 1.808 6.937 1.808 5.956 0 10.374-2.81 13.421-7.857 1.417-2.348 2.077-4.917 2.077-7.648 0-5.26-2.49-9.365-6.729-12.414-2.57-1.848-5.463-2.775-8.618-2.775-6.492 0-11.164 3.28-13.968 9.106-.946 1.97-1.378 4.061-1.378 6.24zm65.324-23.1h1.074c8.978 0 15.806 4.355 20.133 12.192 1.73 3.135 2.656 6.557 2.656 10.142v1.535c0 8.4-4.142 15.093-11.385 19.343-3.353 1.967-7.057 2.984-10.943 2.984h-1.535c-8.402 0-15.079-4.153-19.342-11.38a21.316 21.316 0 0 1-2.987-10.947v-1.535c0-8.404 4.169-15.062 11.377-19.347 3.351-1.991 7.058-2.987 10.952-2.987zm-14.58 23.1c0 5.89 2.89 10.223 7.865 13.27 2.336 1.43 4.909 2.078 7.638 2.078 5.82 0 10.122-2.951 13.116-7.863 1.428-2.342 2.074-4.915 2.074-7.642 0-5.477-2.638-9.661-7.148-12.693-2.471-1.663-5.222-2.496-8.198-2.496-6.492 0-11.164 3.28-13.967 9.106-.948 1.97-1.38 4.061-1.38 6.24zm70.656-14.727c-1.17-.548-3.36-.73-4.624-.778-6.474-.244-11.158 3.402-13.906 9.113-.949 1.97-1.382 4.055-1.382 6.235 0 6.637 3.485 11.284 9.409 14.117 2.164 1.034 4.958 1.23 7.323 1.23 2.08 0 5.02-1.274 6.866-2.151l.32-.152h1.433l.158.032c1.762.367 3.092 1.484 3.092 3.38v.767c0 4.718-8.622 5.798-11.912 6.028-11.61.803-20.293-5.573-23.603-16.647-.575-1.923-.834-3.833-.834-5.837v-1.533c0-8.403 4.17-15.059 11.377-19.34 3.351-1.99 7.057-2.99 10.95-2.99h1.536c4.13 0 7.934 1.173 11.344 3.502l.28.194.177.292c.368.61.685 1.316.685 2.042v.767c0 1.978-1.48 3.042-3.266 3.386l-.148.026h-.458c-1.156 0-3.785-1.197-4.817-1.683zm25.134 5.247c3.01-3.014 6.03-6.022 9.085-8.986.851-.827 4.074-4.327 5.343-4.327h1.388l.158.033c1.768.367 3.092 1.486 3.092 3.386v.766c0 1.296-1.518 2.802-2.355 3.689-1.78 1.887-3.654 3.712-5.476 5.56l-9.362 9.504c4.031 4.04 8.058 8.083 12.056 12.154a313.304 313.304 0 0 1 3.301 3.396c.385.405.953.909 1.276 1.47.347.526.56 1.119.56 1.752v.8l-.045.185c-.435 1.768-1.557 3.194-3.516 3.194h-.617c-1.282 0-2.73-1.45-3.608-2.279-1.81-1.706-3.557-3.5-5.331-5.243l-5.949-5.84v9.334c0 2.15-1.346 3.878-3.569 3.878h-.61c-2.226 0-3.57-1.728-3.57-3.878v-52.596c0-2.15 1.345-3.87 3.57-3.87h.61c2.223 0 3.569 1.72 3.569 3.87v24.048zm96.577-13.313h.77c2.324 0 3.875 1.566 3.875 3.877 0 3.208-3.067 4.029-5.72 4.029-3.48 0-6.803 2.107-9.202 4.47-2.991 2.949-4.3 6.726-4.3 10.878v18.759c0 2.15-1.343 3.876-3.57 3.876h-.612c-2.227 0-3.569-1.725-3.569-3.876v-19.836c0-7.617 3.708-13.835 9.89-18.196 3.691-2.605 7.919-3.98 12.438-3.98zm-55.074 37.176c2.82.985 6.035.844 8.928.34 1.48-.629 5.264-2.28 6.656-2.038l.217.037.2.098c.85.412 1.661.995 2.095 1.86 1.014 2.027.527 4.065-1.465 5.216l-.663.383c-7.35 4.242-15.168 3.654-22.495-.308-3.503-1.894-6.183-4.705-8.16-8.132l-.462-.801c-4.719-8.172-4.082-16.768 1.24-24.539 1.837-2.686 4.238-4.761 7.045-6.384l1.062-.613c6.922-3.996 14.341-3.722 21.45-.215 3.823 1.886 6.92 4.697 9.054 8.394l.384.666c1.55 2.686-.458 5.026-2.531 6.626-2.406 1.856-4.835 4.09-7.141 6.08-5.142 4.439-10.276 8.888-15.414 13.33zm-6.655-4.674c5.75-4.93 11.502-9.865 17.237-14.816 1.96-1.69 4.109-3.444 6.053-5.221-1.56-1.966-4.166-3.383-6.38-4.228-4.47-1.703-8.877-1.131-12.976 1.235-5.365 3.098-7.65 8.031-7.45 14.17.08 2.418.73 4.748 2.013 6.805.452.725.957 1.406 1.503 2.055zM147.488 45.732h22.866v23.375h11.561c5.34 0 10.831-.951 15.887-2.664 2.485-.843 5.273-2.015 7.724-3.49-3.228-4.214-4.876-9.535-5.36-14.78-.66-7.135.78-16.421 5.608-22.005l2.404-2.78 2.864 2.303c7.211 5.793 13.276 13.889 14.345 23.118 8.683-2.554 18.878-1.95 26.531 2.467l3.14 1.812-1.652 3.226C246.933 68.946 233.4 72.86 220.17 72.167c-19.797 49.309-62.898 72.653-115.157 72.653-27 0-51.77-10.093-65.876-34.047l-.231-.39-2.055-4.182c-4.768-10.544-6.352-22.095-5.278-33.637l.323-3.457H51.45V45.732h22.865V22.866h45.733V0h27.44v45.732" fill="#364548"/><path d="M221.57 54.38c1.533-11.916-7.384-21.275-12.914-25.719-6.373 7.368-7.363 26.678 2.635 34.808-5.58 4.956-17.337 9.448-29.376 9.448H35.37c-1.17 12.567 1.036 24.14 6.075 34.045l1.667 3.05a56.536 56.536 0 0 0 3.455 5.184c6.025.387 11.58.52 16.662.408h.002c9.987-.22 18.136-1.4 24.312-3.54a1.761 1.761 0 0 1 1.153 3.326c-.822.286-1.678.552-2.562.805h-.003c-4.863 1.389-10.078 2.323-16.806 2.738.4.007-.416.06-.418.06-.229.015-.517.048-.747.06-2.648.149-5.506.18-8.428.18-3.196 0-6.343-.06-9.862-.24l-.09.06c12.21 13.724 31.302 21.955 55.234 21.955 50.648 0 93.608-22.452 112.632-72.857 13.496 1.385 26.467-2.057 32.367-13.575-9.398-5.423-21.484-3.694-28.443-.196" fill="#22A0C8"/><path d="M221.57 54.38c1.533-11.916-7.384-21.275-12.914-25.719-6.373 7.368-7.363 26.678 2.635 34.808-5.58 4.956-17.337 9.448-29.376 9.448H44.048c-.598 19.246 6.544 33.855 19.18 42.687h.003c9.987-.22 18.136-1.4 24.312-3.54a1.761 1.761 0 0 1 1.153 3.326c-.822.286-1.678.552-2.562.805h-.003c-4.863 1.389-10.526 2.443-17.254 2.858-.002 0-.163-.155-.165-.155 17.237 8.842 42.23 8.81 70.885-2.197 32.13-12.344 62.029-35.86 82.89-62.757-.314.142-.62.287-.917.436" fill="#37B1D9"/><path d="M35.645 88.186c.91 6.732 2.88 13.035 5.8 18.776l1.667 3.05a56.432 56.432 0 0 0 3.455 5.184c6.026.387 11.581.52 16.664.408 9.987-.22 18.136-1.4 24.312-3.54a1.761 1.761 0 0 1 1.153 3.326c-.822.286-1.678.552-2.562.805h-.003c-4.863 1.389-10.496 2.383-17.224 2.799-.231.014-.634.017-.867.03-2.646.148-5.475.239-8.398.239-3.195 0-6.463-.061-9.98-.24 12.21 13.724 31.42 21.985 55.352 21.985 43.36 0 81.084-16.458 102.979-52.822H35.645" fill="#1B81A5"/><path d="M45.367 88.186c2.592 11.82 8.821 21.099 17.864 27.418 9.987-.22 18.136-1.4 24.312-3.54a1.761 1.761 0 0 1 1.153 3.326c-.822.286-1.678.552-2.562.805h-.003c-4.863 1.389-10.615 2.383-17.344 2.799 17.236 8.84 42.157 8.713 70.81-2.293 17.334-6.66 34.017-16.574 48.984-28.515H45.367" fill="#1D91B4"/><path d="M55.26 49.543h19.818v19.818H55.26V49.543zm1.651 1.652h1.564V67.71h-1.564V51.195zm2.94 0h1.627V67.71h-1.626V51.195zm3.002 0h1.627V67.71h-1.627V51.195zm3.004 0h1.626V67.71h-1.626V51.195zm3.003 0h1.626V67.71H68.86V51.195zm3.002 0h1.565V67.71h-1.565V51.195zM78.126 26.677h19.819v19.817h-19.82V26.677zm1.652 1.652h1.563v16.514h-1.563V28.329zm2.94 0h1.626v16.514h-1.625V28.329zm3.002 0h1.626v16.514H85.72V28.329zm3.003 0h1.626v16.514h-1.626V28.329zm3.003 0h1.627v16.514h-1.627V28.329zm3.002 0h1.566v16.514h-1.566V28.329z" fill="#23A3C2"/><path d="M78.126 49.543h19.819v19.818h-19.82V49.543zm1.652 1.652h1.563V67.71h-1.563V51.195zm2.94 0h1.626V67.71h-1.625V51.195zm3.002 0h1.626V67.71H85.72V51.195zm3.003 0h1.626V67.71h-1.626V51.195zm3.003 0h1.627V67.71h-1.627V51.195zm3.002 0h1.566V67.71h-1.566V51.195z" fill="#34BBDE"/><path d="M100.993 49.543h19.818v19.818h-19.818V49.543zm1.651 1.652h1.563V67.71h-1.563V51.195zm2.94 0h1.626V67.71h-1.626V51.195zm3.003 0h1.626V67.71h-1.626V51.195zm3.003 0h1.626V67.71h-1.626V51.195zm3.002 0h1.628V67.71h-1.628V51.195zm3.003 0h1.564V67.71h-1.564V51.195z" fill="#23A3C2"/><path d="M100.993 26.677h19.818v19.817h-19.818V26.677zm1.651 1.652h1.563v16.514h-1.563V28.329zm2.94 0h1.626v16.514h-1.626V28.329zm3.003 0h1.626v16.514h-1.626V28.329zm3.003 0h1.626v16.514h-1.626V28.329zm3.002 0h1.628v16.514h-1.628V28.329zm3.003 0h1.564v16.514h-1.564V28.329zM123.859 49.543h19.818v19.818h-19.818V49.543zm1.652 1.652h1.563V67.71h-1.563V51.195zm2.94 0h1.626V67.71h-1.626V51.195zm3.002 0h1.626V67.71h-1.626V51.195zm3.003 0h1.627V67.71h-1.627V51.195zm3.003 0h1.627V67.71h-1.627V51.195zm3.003 0h1.564V67.71h-1.564V51.195z" fill="#34BBDE"/><path d="M123.859 26.677h19.818v19.817h-19.818V26.677zm1.652 1.652h1.563v16.514h-1.563V28.329zm2.94 0h1.626v16.514h-1.626V28.329zm3.002 0h1.626v16.514h-1.626V28.329zm3.003 0h1.627v16.514h-1.627V28.329zm3.003 0h1.627v16.514h-1.627V28.329zm3.003 0h1.564v16.514h-1.564V28.329z" fill="#23A3C2"/><path d="M123.859 3.81h19.818V23.63h-19.818V3.81zm1.652 1.651h1.563v16.516h-1.563V5.46zm2.94 0h1.626v16.516h-1.626V5.46zm3.002 0h1.626v16.516h-1.626V5.46zm3.003 0h1.627v16.516h-1.627V5.46zm3.003 0h1.627v16.516h-1.627V5.46zm3.003 0h1.564v16.516h-1.564V5.46z" fill="#34BBDE"/><path d="M146.725 49.543h19.818v19.818h-19.818V49.543zm1.65 1.652h1.565V67.71h-1.564V51.195zm2.94 0h1.627V67.71h-1.626V51.195zm3.004 0h1.627V67.71h-1.627V51.195zm3.002 0h1.627V67.71h-1.627V51.195zm3.004 0h1.626V67.71h-1.626V51.195zm3.002 0h1.564V67.71h-1.564V51.195z" fill="#23A3C2"/><path d="M96.704 101.492a5.468 5.468 0 1 1-.002 10.935 5.468 5.468 0 0 1 .002-10.935" fill="#D3ECEC"/><path d="M96.704 103.043c.5 0 .977.094 1.417.265a1.598 1.598 0 0 0 .798 2.98c.605 0 1.13-.335 1.402-.831a3.915 3.915 0 1 1-3.617-2.414M0 90.162h254.327c-5.537-1.404-17.52-3.302-15.544-10.56-10.07 11.652-34.353 8.175-40.482 2.43-6.824 9.898-46.554 6.135-49.325-1.576-8.556 10.041-35.067 10.041-43.623 0-2.773 7.711-42.502 11.474-49.327 1.575-6.128 5.746-30.41 9.223-40.48-2.428C17.522 86.86 5.539 88.758 0 90.163" fill="#364548"/><path d="M111.237 140.89c-13.54-6.425-20.971-15.16-25.106-24.694-5.03 1.435-11.075 2.353-18.1 2.747-2.646.148-5.43.224-8.35.224-3.368 0-6.917-.1-10.643-.297 12.417 12.41 27.692 21.964 55.976 22.138 2.088 0 4.16-.04 6.223-.118" fill="#BDD9D7"/><path d="M91.16 124.994c-1.873-2.543-3.69-5.739-5.026-8.8-5.03 1.437-11.077 2.355-18.103 2.75 4.826 2.619 11.727 5.046 23.13 6.05" fill="#D3ECEC"/></g></svg>
        </div>
        {/* aws */}
        <div className={ styles.icon }>
          <svg viewBox="0 0 128 128">
            <path fill="#201C1D" d="M44.634 57.361c-2.599 0-5.499 1.001-6.107 4.296-.064.351.167.517.391.567l2.663.32c.246-.014.414-.28.461-.533.228-1.134 1.16-1.669 2.201-1.669.563 0 1.193.193 1.527.71.381.576.354 1.359.354 2.024v.391c-1.582.182-3.666.292-5.147.958-1.709.76-2.912 2.307-2.912 4.58 0 2.913 1.785 4.366 4.083 4.366 1.94 0 3.013-.456 4.509-2.022.497.738.656 1.073 1.562 1.846.202.108.458.098.64-.071v.035c.545-.497 1.535-1.401 2.094-1.881.222-.187.174-.493 0-.746-.5-.707-1.029-1.276-1.029-2.592v-4.366c0-1.85.156-3.556-1.172-4.828-1.046-1.031-2.791-1.385-4.118-1.385zm35.786 0c-2.6 0-5.498 1.001-6.106 4.296-.064.351.166.517.39.567l2.664.32c.246-.014.415-.28.461-.533.229-1.134 1.161-1.669 2.201-1.669.564 0 1.193.193 1.526.71.381.576.319 1.359.319 2.024v.391c-1.582.182-3.63.292-5.112.958-1.711.76-2.91 2.307-2.91 4.58 0 2.913 1.785 4.366 4.082 4.366 1.938 0 3.011-.456 4.509-2.022.495.738.656 1.073 1.563 1.846.203.108.458.098.639-.071v.035c.546-.497 1.537-1.401 2.095-1.881.222-.187.171-.493 0-.746-.5-.707-1.03-1.276-1.03-2.592v-4.366c0-1.85.12-3.556-1.206-4.828-1.05-1.031-2.759-1.385-4.085-1.385zm-20.13.142c-1.68 0-2.924.848-3.585 2.663h-.036v-1.882c-.018-.262-.23-.483-.496-.497h-2.557c-.29 0-.533.245-.533.533v14.378c.022.255.238.479.498.497h2.733c.292 0 .531-.243.532-.533v-7.633c0-1.664-.08-3.94 1.882-3.94 1.937 0 1.668 2.339 1.668 3.94v7.633c0 .271.222.515.498.533h2.733c.29 0 .532-.243.532-.533v-7.633c0-.816-.033-2.006.248-2.733s.971-1.207 1.634-1.207c.789 0 1.394.275 1.598 1.242.126.575.071 2.094.071 2.698v7.633c0 .271.222.515.496.533h2.734c.29 0 .532-.243.532-.533v-9.088c0-1.545.154-3.298-.71-4.509-.765-1.088-2.015-1.563-3.16-1.563-1.605 0-3.101.848-3.763 2.663-.764-1.814-1.842-2.662-3.549-2.662zm46.472 0c-3.949 0-6.142 3.473-6.142 7.953 0 4.448 2.167 8.022 6.142 8.022 3.823 0 6.249-3.492 6.249-7.881 0-4.537-2.198-8.094-6.249-8.094zm15.585 0c-1.887 0-2.966.943-3.728 2.911h-.035v-2.201c-.049-.222-.258-.377-.497-.39h-2.521c-.275 0-.508.199-.533.461v14.378c0 .271.225.515.497.533h2.699c.289 0 .527-.242.531-.533v-7.739c0-.97.083-1.855.463-2.733.306-.697.899-1.137 1.562-1.137 1.883 0 1.703 2.295 1.703 3.87v7.811c.028.244.249.445.498.462h2.733c.269 0 .501-.204.532-.462v-9.053c0-1.392.003-3.324-.71-4.474-.764-1.241-1.975-1.704-3.194-1.704zm-32.803.249c-.278 0-.497.22-.498.532v2.059c.001.31.213.531.498.533h4.686l-5.361 7.916c-.326.511-.354 1.089-.354 1.421v2.095c0 .302.328.63.639.461 3.056-1.668 6.717-1.52 9.479-.035.336.183.675-.16.675-.462v-2.202c-.026-.294-.142-.576-.497-.781-1.568-.901-3.388-1.178-5.111-1.136l4.65-6.815c.43-.613.67-.981.674-1.279v-1.774c0-.306-.209-.532-.496-.532h-8.984zm17.218 2.698c.865 0 1.504.386 1.811 1.384.354 1.152.391 2.588.391 3.799 0 1.846-.086 4.899-2.201 4.899-2.139 0-2.13-3.78-2.13-5.538-.001-1.753.117-4.544 2.129-4.544zm-60.673 5.254v.604c0 1.092.04 2.01-.497 2.981-.434.79-1.116 1.279-1.881 1.279-1.045 0-1.668-.849-1.668-2.06-.001-2.387 2.074-2.804 4.046-2.804zm35.786 0v.604c0 1.092.04 2.01-.496 2.981-.435.79-1.112 1.279-1.882 1.279-1.047 0-1.669-.849-1.669-2.06 0-2.387 2.073-2.804 4.047-2.804z"></path><path d="M99.59 73.656v2.06h1.386v-2.06h-1.386zm-40.152.356v14.662h1.278v-1.314c.272.521.582.91.958 1.171.376.262.806.391 1.277.391.939 0 1.75-.479 2.45-1.455.701-.977 1.065-2.392 1.065-4.189 0-1.178-.151-2.154-.462-2.981-.311-.826-.725-1.441-1.242-1.847-.519-.406-1.107-.639-1.739-.639-.452 0-.874.118-1.244.354-.368.236-.666.622-.958 1.101v-5.254h-1.383zm13.135 3.443c-.962 0-1.728.285-2.271.852s-.815 1.296-.815 2.202c0 .525.115.972.318 1.384.202.413.49.748.852.994.364.246 1.09.57 2.166.923.745.24 1.19.444 1.385.604.281.233.427.538.427.959 0 .486-.17.892-.498 1.207-.328.317-.786.461-1.385.461-.6 0-1.094-.168-1.455-.532-.362-.364-.557-.918-.64-1.668l-1.384.283c.313 2.278 1.449 3.41 3.408 3.408 1.045 0 1.844-.295 2.449-.923.604-.628.924-1.471.924-2.485 0-.548-.098-1.022-.284-1.419-.188-.397-.445-.693-.782-.924-.336-.229-1.089-.536-2.236-.923-.834-.292-1.321-.506-1.49-.64-.284-.224-.427-.53-.427-.922 0-.4.133-.739.427-.995.294-.255.747-.39 1.349-.39 1.058 0 1.65.581 1.774 1.739l1.35-.213c-.094-.732-.253-1.312-.496-1.705-.245-.392-.605-.724-1.065-.958-.465-.232-.992-.319-1.601-.319zm8.486 0c-1.109 0-2.046.457-2.77 1.42-.723.963-1.063 2.358-1.063 4.189 0 1.764.348 3.146 1.063 4.083.718.934 1.646 1.384 2.806 1.384.921 0 1.685-.276 2.307-.852.624-.575 1.077-1.423 1.313-2.557l-1.42-.248c-.407 1.451-1.16 2.163-2.2 2.165-.664 0-1.206-.281-1.669-.887-.464-.607-.726-1.507-.78-2.698h6.105v-.497c0-1.792-.357-3.137-1.065-4.083-.709-.945-1.569-1.419-2.627-1.419zm8.414 0c-.331 0-.621.112-.888.355-.267.242-.567.744-.888 1.49v-1.633h-1.243v10.615h1.385v-5.538c0-.772.074-1.516.249-2.201.1-.394.289-.703.532-.923.244-.221.523-.32.816-.32.326 0 .65.131.994.391l.462-1.668c-.482-.386-.955-.568-1.419-.568zm16.969 0c-1.096 0-1.999.462-2.699 1.385-.696.923-1.063 2.309-1.063 4.153 0 1.831.372 3.218 1.063 4.154.693.934 1.559 1.384 2.628 1.384.884 0 1.642-.328 2.272-.994.63-.665 1.014-1.646 1.172-2.911l-1.35-.213c-.101.905-.336 1.557-.71 1.988-.373.43-.823.639-1.349.639-.67 0-1.241-.313-1.67-.958-.427-.646-.638-1.68-.638-3.124 0-1.4.227-2.41.674-3.053.448-.644 1.021-.994 1.704-.994.457 0 .847.177 1.172.531.327.356.543.918.674 1.634l1.351-.283c-.162-1.119-.521-1.962-1.102-2.521-.58-.56-1.284-.817-2.129-.817zm7.917 0c-1.11 0-2.046.457-2.77 1.42-.723.963-1.065 2.358-1.065 4.189 0 1.764.349 3.146 1.065 4.083.719.934 1.646 1.384 2.805 1.384.918 0 1.685-.276 2.308-.852.622-.575 1.075-1.423 1.314-2.557l-1.42-.248c-.41 1.451-1.128 2.163-2.166 2.165-.664 0-1.241-.281-1.704-.887-.463-.607-.725-1.507-.781-2.698h6.106v-.497c0-1.792-.357-3.137-1.065-4.083-.706-.945-1.568-1.419-2.627-1.419zm8.202 0c-.966 0-1.729.285-2.272.852-.545.566-.817 1.296-.817 2.202 0 .525.082.972.284 1.384.2.413.489.748.853.994.361.246 1.09.57 2.166.923.743.24 1.226.444 1.42.604.281.233.426.538.426.959 0 .486-.168.892-.497 1.207-.326.317-.785.461-1.384.461-.602 0-1.094-.168-1.456-.532-.361-.364-.595-.918-.675-1.668l-1.384.283c.313 2.278 1.446 3.41 3.407 3.408 1.047 0 1.881-.295 2.485-.923s.922-1.471.922-2.485c0-.548-.096-1.022-.282-1.419-.188-.397-.479-.693-.817-.924-.336-.229-1.054-.536-2.2-.923-.835-.292-1.357-.506-1.527-.64-.283-.224-.426-.53-.426-.922 0-.4.167-.739.462-.995.294-.255.75-.39 1.35-.39 1.058 0 1.649.581 1.774 1.739l1.349-.213c-.094-.732-.252-1.312-.497-1.705-.244-.392-.605-.724-1.064-.958-.463-.232-.994-.319-1.6-.319zm-31.668.213l3.09 10.615h1.313l3.089-10.615h-1.42l-1.811 6.497c-.219.785-.413 1.464-.533 2.023-.15-.705-.296-1.446-.496-2.166l-1.775-6.354h-1.457zm8.697 0v10.615h1.386v-10.615h-1.386zm-45.513.143c-1.098 0-1.981.492-2.697 1.455-.717.963-1.102 2.358-1.102 4.189 0 1.765.355 3.113 1.065 4.047.709.935 1.657 1.42 2.806 1.42.911 0 1.655-.312 2.271-.888.616-.575 1.042-1.423 1.279-2.556l-1.385-.213c-.404 1.451-1.136 2.163-2.165 2.165-.659 0-1.21-.281-1.669-.888-.46-.606-.727-1.506-.781-2.697h6.035l.036-.497c0-1.792-.364-3.172-1.065-4.119-.701-.945-1.581-1.418-2.628-1.418zm-15.584.248l2.485 10.615h1.455l1.634-8.165.284 1.81 1.313 6.355h1.42l2.521-10.615h-1.313l-1.386 6.141-.462 2.06-.426-2.06-1.207-6.142h-1.42l-1.278 6.213-.426 2.201-.496-2.272-1.279-6.142h-1.419zm42.53.852c.69 0 1.258.333 1.704.994.306.452.506 1.14.567 2.059h-4.58c.044-.932.307-1.65.747-2.201.44-.55.943-.852 1.562-.852zm33.3 0c.688 0 1.258.333 1.704.994.308.452.506 1.14.569 2.059h-4.581c.044-.932.308-1.65.746-2.201.437-.55.943-.852 1.562-.852zm-60.246.39c.682 0 1.23.334 1.67.995.304.452.505 1.14.567 2.059h-4.51c.043-.932.275-1.687.711-2.236.434-.552.948-.818 1.562-.818zm8.805 0c.615 0 1.14.342 1.563.995.423.652.604 1.659.604 3.053 0 1.357-.2 2.37-.64 3.053-.439.684-.96 1.029-1.526 1.029-.416 0-.794-.14-1.136-.426-.344-.286-.595-.696-.782-1.242-.186-.546-.283-1.387-.283-2.485 0-1.294.231-2.263.674-2.947.443-.684.96-1.03 1.526-1.03z"></path><path fill="#F7A80D" d="M18.594 68.048l-5.29 2.271 4.899 2.095 5.681-2.095-5.29-2.271zm-7.952 2.839l-.178 10.226 7.74 3.408v-10.616l-7.562-3.018zm15.904 0l-6.994 2.663v10.012l6.994-2.84v-9.835zM34.889 39.078l-5.326 2.271 4.935 2.095 5.681-2.095-5.29-2.271zm-7.385 3.018v10.224l6.604 1.917.213-9.302-6.817-2.839zm14.769.567l-6.249 2.663v10.047l6.249-2.84v-9.87zM9.877 53.468l-5.29 2.272 4.899 2.095 5.68-2.095-5.289-2.272zm-7.951 2.841l-.178 10.224 7.739 3.408v-10.615l-7.561-3.017zm15.904 0l-6.994 2.662v10.012l6.994-2.84v-9.834zM26.918 53.091l-5.29 2.271 4.899 2.094 5.68-2.094-5.289-2.271zm-7.952 2.839l-.177 10.225 7.739 3.408v-10.615l-7.562-3.018zm15.905 0l-6.994 2.663v10.012l6.994-2.841v-9.834zM51.533 39.078l-5.289 2.271 4.899 2.095 5.681-2.095-5.291-2.271zm-7.952 2.84l-.178 10.225 7.74 3.407v-10.614l-7.562-3.018zm15.904 0l-6.994 2.663v10.011l6.994-2.84v-9.834z"></path>
          </svg>
        </div>
        {/* digital ocean */}
        <div className={ styles.digitalOcean }>
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            viewBox="0 0 354 354">
            <g id="XMLID_229_">
              <g id="XMLID_690_">
                <g id="XMLID_691_">
                  <g>
                    <g id="XMLID_44_">
                      <g id="XMLID_48_">
                        <path id="XMLID_49_" class="st0" d="M177,221.5l0-34.2c36.2,0,64.3-35.9,50.4-74C222.3,99.3,211,88,196.9,82.9
                          c-38.1-13.8-74,14.2-74,50.4c0,0,0,0,0,0l-34.1,0c0-57.7,55.8-102.7,116.3-83.8c26.4,8.3,47.5,29.3,55.7,55.7
                          C279.7,165.7,234.7,221.5,177,221.5z"/>
                      </g>
                      <polygon id="XMLID_47_" class="st1" points="177.1,187.5 143,187.5 143,153.4 143,153.4 177.1,153.4 177.1,153.4 					"/>
                      <polygon id="XMLID_46_" class="st1" points="143,213.6 116.9,213.6 116.9,213.6 116.9,187.5 143,187.5 143,213.6 					"/>
                      <path id="XMLID_45_" class="st1" d="M116.9,187.5H95c0,0,0,0,0,0v-21.9c0,0,0,0,0,0h21.9c0,0,0,0,0,0V187.5z"/>
                    </g>
                  </g>
                </g>
              </g>
              <g id="XMLID_234_">
                <path id="XMLID_677_" class="st0" d="M31.2,256.1c-4.4-3.1-10-4.6-16.4-4.6H0.8V296h14.1c6.4,0,12-1.6,16.4-4.9
                  c2.4-1.7,4.3-4.1,5.7-7.1c1.3-3,2-6.6,2-10.5c0-3.9-0.7-7.4-2-10.4C35.6,260.1,33.7,257.7,31.2,256.1z M9,259h4.4
                  c4.9,0,8.9,1,12,2.9c3.4,2.1,5.1,6,5.1,11.6c0,5.8-1.7,9.9-5.1,12.1h0c-2.9,1.9-6.9,2.9-11.9,2.9H9V259z"/>
                <path id="XMLID_676_" class="st0" d="M48.7,250.9c-1.4,0-2.5,0.5-3.5,1.4c-0.9,0.9-1.4,2-1.4,3.4c0,1.4,0.5,2.5,1.4,3.5
                  c0.9,0.9,2.1,1.4,3.5,1.4c1.3,0,2.5-0.5,3.5-1.4c0.9-0.9,1.4-2.1,1.4-3.5c0-1.4-0.5-2.5-1.4-3.4C51.2,251.4,50,250.9,48.7,250.9z"
                  />
                <rect id="XMLID_675_" x="44.7" y="264.6" class="st0" width="7.9" height="31.4"/>
                <path id="XMLID_670_" class="st0" d="M81.3,267.2c-2.4-2.1-5-3.4-7.9-3.4c-4.4,0-8,1.5-10.8,4.5c-2.8,2.9-4.3,6.7-4.3,11.3
                  c0,4.4,1.4,8.2,4.2,11.2c2.8,2.9,6.5,4.4,10.8,4.4c3,0,5.7-0.8,7.8-2.5v0.7c0,2.6-0.7,4.6-2.1,6c-1.4,1.4-3.3,2.1-5.7,2.1
                  c-3.6,0-5.9-1.4-8.7-5.2l-5.4,5.2l0.1,0.2c1.2,1.6,2.9,3.2,5.3,4.7c2.3,1.5,5.3,2.3,8.8,2.3c4.7,0,8.5-1.4,11.3-4.3
                  c2.8-2.9,4.2-6.7,4.2-11.4v-28.5h-7.8V267.2z M79.2,285.8c-1.4,1.6-3.2,2.3-5.4,2.3c-2.3,0-4-0.8-5.4-2.3c-1.4-1.6-2-3.6-2-6.1
                  c0-2.6,0.7-4.6,2-6.2c1.3-1.6,3.2-2.3,5.4-2.3c2.3,0,4,0.8,5.4,2.3c1.4,1.6,2.1,3.7,2.1,6.2C81.3,282.2,80.6,284.2,79.2,285.8z"/>
                <rect id="XMLID_668_" x="95.8" y="264.6" class="st0" width="7.9" height="31.4"/>
                <path id="XMLID_660_" class="st0" d="M99.8,250.9c-1.4,0-2.5,0.5-3.5,1.4c-0.9,0.9-1.4,2-1.4,3.4c0,1.4,0.5,2.5,1.4,3.5
                  c0.9,0.9,2.1,1.4,3.5,1.4c1.3,0,2.5-0.5,3.5-1.4c0.9-0.9,1.4-2.1,1.4-3.5c0-1.4-0.5-2.5-1.4-3.4
                  C102.3,251.4,101.2,250.9,99.8,250.9z"/>
                <path id="XMLID_652_" class="st0" d="M121,256.1h-7.8v8.5h-4.5v7.2h4.5v13c0,4.1,0.8,7,2.4,8.7c1.6,1.7,4.5,2.5,8.5,2.5
                  c1.3,0,2.6,0,3.8-0.1l0.4,0v-7.2l-2.7,0.1c-1.9,0-3.1-0.3-3.7-1c-0.6-0.7-0.9-2.1-0.9-4.2v-11.9h7.4v-7.2H121V256.1z"/>
                <rect id="XMLID_642_" x="165.4" y="251.4" class="st0" width="7.9" height="44.6"/>
                <path id="XMLID_448_" class="st0" d="M253.1,284.8c-1.4,1.6-2.9,3-4,3.7v0c-1.1,0.7-2.5,1.1-4.1,1.1c-2.3,0-4.2-0.8-5.7-2.6
                  c-1.5-1.7-2.3-4-2.3-6.6c0-2.7,0.8-4.9,2.3-6.6c1.5-1.7,3.4-2.6,5.7-2.6c2.5,0,5.2,1.6,7.5,4.3l5.2-5l0,0
                  c-3.4-4.4-7.7-6.5-12.9-6.5c-4.3,0-8.1,1.6-11.2,4.7c-3.1,3.1-4.6,7-4.6,11.7s1.6,8.6,4.6,11.7c3.1,3.1,6.8,4.7,11.2,4.7
                  c5.7,0,10.3-2.5,13.5-7L253.1,284.8z"/>
                <path id="XMLID_445_" class="st0" d="M285.6,269c-1.1-1.6-2.6-2.8-4.5-3.7c-1.9-0.9-4.1-1.4-6.5-1.4c-4.4,0-8,1.6-10.7,4.8
                  c-2.6,3.2-4,7.1-4,11.8c0,4.8,1.5,8.7,4.3,11.7c2.9,3,6.7,4.5,11.4,4.5c5.3,0,9.7-2.2,13-6.4l0.2-0.2l-5.2-5l0,0
                  c-0.5,0.6-1.2,1.2-1.8,1.8c-0.8,0.7-1.5,1.3-2.3,1.7c-1.2,0.6-2.5,0.9-4,0.9c-2.2,0-4-0.6-5.4-1.9c-1.3-1.2-2.1-2.8-2.3-4.8h20.9
                  l0.1-2.9c0-2-0.3-4-0.8-5.8C287.5,272.3,286.7,270.6,285.6,269z M268.3,276.4c0.4-1.5,1.1-2.8,2.1-3.7c1.1-1.1,2.5-1.6,4.1-1.6
                  c1.9,0,3.4,0.5,4.4,1.6c0.9,1,1.5,2.2,1.6,3.7H268.3z"/>
                <path id="XMLID_442_" class="st0" d="M315.9,267L315.9,267c-2.4-2-5.7-3.1-9.8-3.1c-2.6,0-5.1,0.6-7.3,1.7c-2.1,1-4.1,2.8-5.4,5
                  l0.1,0.1l5.1,4.8c2.1-3.3,4.4-4.5,7.5-4.5c1.7,0,3,0.4,4.1,1.3c1,0.9,1.6,2,1.6,3.4v1.5c-2-0.6-3.9-0.9-5.8-0.9
                  c-3.9,0-7.1,0.9-9.5,2.7c-2.4,1.8-3.6,4.5-3.6,7.9c0,3,1,5.3,3.1,7.1c2.1,1.7,4.6,2.6,7.6,2.6c3,0,5.8-1.2,8.4-3.3v2.6h7.8v-20.2
                  C319.5,272,318.3,269,315.9,267z M301.9,284c0.9-0.6,2.2-0.9,3.8-0.9c1.9,0,3.9,0.4,6,1.1v3.1c-1.7,1.6-4,2.4-6.8,2.4
                  c-1.4,0-2.4-0.3-3.2-0.9c-0.7-0.6-1.1-1.3-1.1-2.3C300.6,285.4,301,284.6,301.9,284z"/>
                <path id="XMLID_393_" class="st0" d="M349.9,267.6c-2.2-2.5-5.3-3.7-9.2-3.7c-3.1,0-5.7,0.9-7.6,2.7v-1.9h-7.7V296h7.9v-17.3
                  c0-2.4,0.6-4.3,1.7-5.6c1.1-1.3,2.6-2,4.7-2c1.8,0,3.1,0.6,4.1,1.8c1,1.2,1.5,2.9,1.5,4.9V296h7.9v-18.2
                  C353.2,273.5,352.1,270,349.9,267.6z"/>
                <path id="XMLID_320_" class="st0" d="M155.5,267L155.5,267c-2.4-2-5.7-3.1-9.8-3.1c-2.6,0-5.1,0.6-7.3,1.7c-2.1,1-4.1,2.8-5.4,5
                  l0.1,0.1l5.1,4.8c2.1-3.3,4.4-4.5,7.5-4.5c1.7,0,3,0.4,4.1,1.3c1,0.9,1.6,2,1.6,3.4v1.5c-2-0.6-3.9-0.9-5.8-0.9
                  c-3.9,0-7.1,0.9-9.5,2.7c-2.4,1.8-3.6,4.5-3.6,7.9c0,3,1,5.3,3.1,7.1c2.1,1.7,4.6,2.6,7.6,2.6c3,0,5.8-1.2,8.4-3.3v2.6h7.8v-20.2
                  C159.1,272,157.9,269,155.5,267z M141.5,284c0.9-0.6,2.2-0.9,3.8-0.9c1.9,0,3.9,0.4,6,1.1v3.1c-1.7,1.6-4,2.4-6.8,2.4
                  c-1.4,0-2.4-0.3-3.2-0.9c-0.7-0.6-1.1-1.3-1.1-2.3C140.2,285.4,140.6,284.6,141.5,284z"/>
                <path id="XMLID_235_" class="st0" d="M202,296.7c-12.7,0-23-10.3-23-23s10.3-23,23-23s23,10.3,23,23S214.7,296.7,202,296.7z
                  M202,258.8c-8.2,0-14.9,6.7-14.9,14.9s6.7,14.9,14.9,14.9s14.9-6.7,14.9-14.9S210.2,258.8,202,258.8z"/>
              </g>
            </g>
          </svg>
        </div>
        {/* heroku */}
        <div className={ styles.heroku }>
          <svg viewBox="0 0 256 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet"><path d="M28.083 398.289V363.51c0-2.452-1.798-3.51-3.917-3.51-4.248 0-9.554 1.058-14.37 3.181v35.108H0v-64.576h9.795v21.304c4.656-1.712 10.206-3.18 15.758-3.18 8.898 0 12.246 5.469 12.246 12.976v33.476h-9.716zm27.999-21.063c.326 11.674 2.613 13.961 9.794 13.961 5.634 0 12.002-1.879 16.902-3.757l1.632 7.346c-5.226 2.37-11.593 4.655-19.183 4.655-16.33 0-18.862-8.978-18.862-23.268 0-7.835.573-14.939 2.45-21.47 4.898-1.878 11.43-2.857 19.673-2.857 13.393 0 17.473 7.43 17.473 20.41v4.98H56.082zM68.488 360c-2.935 0-7.59.082-11.427.813-.406 1.96-.899 4.655-1.062 9.636h20.41c0-6.778-1.225-10.449-7.921-10.449zm35.837 3.181v35.108h-9.797v-39.515c8.246-4.489 16.981-5.877 22.698-6.285v8.164c-4 .326-9.064.816-12.9 2.528zm38.778 36.25c-14.616 0-21.228-7.183-21.228-23.594 0-17.389 8.735-24 21.228-24 14.612 0 21.226 7.182 21.226 23.592 0 17.39-8.737 24.002-21.226 24.002zm0-39.43c-7.512 0-11.675 4.325-11.675 15.836 0 12.574 3.51 15.35 11.675 15.35 7.51 0 11.674-4.247 11.674-15.758 0-12.574-3.51-15.429-11.674-15.429zm68.49 38.288H200.08c-2.692-7.184-6.45-14.532-12.246-20.9h-5.144v20.9h-9.796v-64.576h9.796v37.062h4.573c4.98-5.144 8.816-11.509 11.511-17.797h11.02c-3.754 7.593-8.57 14.287-13.959 19.757 6.45 8.164 11.511 16.818 15.757 25.554zm18.363 1.142c-8.897 0-12.244-5.468-12.244-12.98v-33.473h9.714v34.697c0 2.452 1.794 3.512 3.917 3.512 4.246 0 10.042-1.06 14.86-3.184v-35.025H256v39.35c-11.593 6.369-20.493 7.103-26.044 7.103zM225.628 317.253H30.258C13.545 317.253 0 303.708 0 286.998V30.256C0 13.546 13.546 0 30.257 0h195.37c16.71 0 30.26 13.546 30.26 30.256v256.742c0 16.71-13.55 30.255-30.26 30.255z" fill="#6762A6"/><path d="M160.36 273.6V147.61s8.195-30.15-100.943 12.334c-.2.539-.2-116.504-.2-116.504l35.66-.22v74.991s99.846-39.325 99.846 29.824V273.6h-34.362zm20.32-184.994h-37.824c13.615-16.646 25.94-45.167 25.94-45.167h39.11s-6.696 18.587-27.225 45.167zM59.865 273.382v-71.748l35.878 35.877-35.878 35.871z" fill="#FFF"/></svg>
        </div>
      </div>
    </div>
  );
}

export default Deployment;