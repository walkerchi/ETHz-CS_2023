import qrcode
import os
from PIL import Image
from qrcode.image.styledpil import StyledPilImage
from qrcode.image.styles.moduledrawers import VerticalBarsDrawer, HorizontalBarsDrawer, RoundedModuleDrawer, GappedSquareModuleDrawer, CircleModuleDrawer
from qrcode.image.styles.colormasks import HorizontalGradiantColorMask, VerticalGradiantColorMask,ImageColorMask


def make_qr(url, filename, 
            module_drawer=GappedSquareModuleDrawer(),
            color_mask   = ImageColorMask(color_mask_image = Image.open("bg.png"), 
                                        #   back_color=(10,10,20)
                                          back_color=(230,230,240)
                                          ),
            fill_color="purple", back_color="black"):
    qr = qrcode.QRCode(
        version=3,
    )
    qr.add_data(url)
    qr.make()
    img = qr.make_image(
        image_factory=StyledPilImage,
        module_drawer=module_drawer,
        color_mask=color_mask,
        fill_color=fill_color, 
        back_color=back_color)
    img.save(os.path.join("src/images/",filename))

if __name__ == '__main__':

    make_qr("https://walkerchi.github.io/ETHz-CaseStudy-2022/", 
            "ethz-case-study-2022.png", 
            fill_color="#cc00ff", 
            )
    make_qr("https://walkerchi.github.io/ETHz-CaseStudy-2023/", 
            "ethz-case-study-2023.png", 
            fill_color="#cc00ff", 
            )
