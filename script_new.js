function card(Title, cName, View, Months, duration_time, images) {

    let n = View;
    let convert = (n) => {
        if (n < 1e3) return n;
        if (n >= 1e3 && n < 1e6)
            return +(n / 1e3).toFixed(1) + "K";
        if (n >= 1e6 && n < 1e9)
            return +(n / 1e6).toFixed(1) + "M";
        if (n >= 1e9 && n < 1e12)
            return +(n / 1e9).toFixed(1) + "B";
        if (n >= 1e12) return +(n / 1e12).toFixed(1) + "T";
    };
    
    let a = ` <div class="main1">
        <div><img src=${images} alt="images">
            <div class="dur">${duration_time}</div>
        </div>
        <div id="col">
            <div class="title">${Title}</div>
            <span class="cName">${cName}</span>
            <span class="Views">${convert(n)} Views </span>
            <span class="month">${Months}</span>
        </div>

    </div>`

    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + a
}


card("Let's Go to Masjid! | چلو چلو مسجد چلو | Hizb Al Azam | Chalo Chalo series", "Zeeshan Usmani", 92597, "8 months ago","25:22" , "https://i.ytimg.com/vi/8qm3U2mvFNo/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCqUucVKPQAcHfTE3fXq0RdBe-6zQ");

card("Let's Go to Bahamas! | چلو چلو بہاماس چلو | Bahamas job | Bahamas immigration", "Zeeshan Usmani", 160000, "5 months ago","15:02" , "https://i.ytimg.com/vi/fvP9Gk2ijvc/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBQUeHP30mM3VWai78rpPMFXs99Pw");

card("Let's Go to UK! | چلو چلو برطانیہ چلو | Life in UK | Work in UK|", "Zeeshan Usmani", 1600000, "5 months ago","15:02" , "https://i.ytimg.com/vi/eBVMNvhcKzE/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDPCfL_wstVFTlxVz2a0xu4Wd32cQ");
card("Let's Go to UK! | چلو چلو برطانیہ چلو | Life in UK | Work in UK|", "Zeeshan Usmani", 1600000, "5 months ago","15:02" , "https://i.ytimg.com/vi/eBVMNvhcKzE/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDPCfL_wstVFTlxVz2a0xu4Wd32cQ");
card("Let's Go to UK! | چلو چلو برطانیہ چلو | Life in UK | Work in UK|", "Zeeshan Usmani", 1600000, "5 months ago","15:02" , "https://i.ytimg.com/vi/eBVMNvhcKzE/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDPCfL_wstVFTlxVz2a0xu4Wd32cQ");
card("Let's Go to UK! | چلو چلو برطانیہ چلو | Life in UK | Work in UK|", "Zeeshan Usmani", 1600000, "5 months ago","15:02" , "https://i.ytimg.com/vi/eBVMNvhcKzE/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDPCfL_wstVFTlxVz2a0xu4Wd32cQ");
card("Let's Go to UK! | چلو چلو برطانیہ چلو | Life in UK | Work in UK|", "Zeeshan Usmani", 1600000, "5 months ago","15:02" , "https://i.ytimg.com/vi/eBVMNvhcKzE/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDPCfL_wstVFTlxVz2a0xu4Wd32cQ");
card("Let's Go to UK! | چلو چلو برطانیہ چلو | Life in UK | Work in UK|", "Zeeshan Usmani", 1600000, "5 months ago","15:02" , "https://i.ytimg.com/vi/eBVMNvhcKzE/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDPCfL_wstVFTlxVz2a0xu4Wd32cQ");
card("Let's Go to UK! | چلو چلو برطانیہ چلو | Life in UK | Work in UK|", "Zeeshan Usmani", 1600000, "5 months ago","15:02" , "https://i.ytimg.com/vi/eBVMNvhcKzE/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDPCfL_wstVFTlxVz2a0xu4Wd32cQ");
card("Let's Go to UK! | چلو چلو برطانیہ چلو | Life in UK | Work in UK|", "Zeeshan Usmani", 1600000, "5 months ago","15:02" , "https://i.ytimg.com/vi/eBVMNvhcKzE/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDPCfL_wstVFTlxVz2a0xu4Wd32cQ");
card("Let's Go to UK! | چلو چلو برطانیہ چلو | Life in UK | Work in UK|", "Zeeshan Usmani", 1600000, "5 months ago","15:02" , "https://i.ytimg.com/vi/eBVMNvhcKzE/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDPCfL_wstVFTlxVz2a0xu4Wd32cQ");