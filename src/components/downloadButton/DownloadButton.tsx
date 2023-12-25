import "./style.scss";

export const DownloadButton = () => {
    return (
        <div className="download-btn">
            <a
                className="cta-button"
                href="https://launcher-public-service-prod06.ol.epicgames.com/launcher/api/installer/download/EpicGamesLauncherInstaller.msi?trackingId=21561abdbf244c71b2e3153c4c470b0f"
                target=""
            >
                <span className="label">download</span>
            </a>
        </div>
    );
};
