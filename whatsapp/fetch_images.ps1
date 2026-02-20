$files = @(
    "File:Artificial_Intelligence_Concept_Art.webp",
    "File:The_Digital_Marketing_Collaboration_2015-12-29_(Unsplash).jpg",
    "File:Big_Data.png",
    "File:MobileApplications.jpg",
    "File:Real_Madrid_CF.svg",
    "File:How_to_start_great_startup.jpg"
)

foreach ($file in $files) {
    $url = "https://commons.wikimedia.org/wiki/$file"
    echo "Fetching $url..."
    $content = curl.exe -L -A "Mozilla/5.0" "$url"
    if ($content -match '(https://upload\.wikimedia\.org/wikipedia/commons/[^"]+)') {
        echo "$file : $($matches[1])"
    } else {
        echo "$file : Not found"
    }
}
