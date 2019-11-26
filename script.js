$(function() {
    var $pages = $('.page'),
        currPage = 0;

    function setZIndex(currPage) {
        $pages.each(function(index) {
            if (currPage === index) {
                $(this).css('z-index', 2);
            } else if (Math.abs(currPage - index) === 1) {
                $(this).css('z-index', 1);
            } else {
                $(this).css('z-index', 0);
            }
        });
    }

    function centerCard(currPage) {
        if (!currPage) {
            $pages.css('left', '25%');
        } else if (currPage === $pages.length) {
            $pages.css('left', '75%');
        } else {
            $pages.css('left', '50%');
        }
    }

    function prevPage() {
        if (currPage) {
            currPage--;
            setZIndex(currPage);
            $pages.eq(currPage).removeClass('flipped');
            centerCard(currPage);
        }
    }

    function nextPage() {
        if (currPage < $pages.length) {
            setZIndex(currPage);
            $pages.eq(currPage).addClass('flipped');
            currPage++;
            centerCard(currPage);
        }
    }

    setZIndex(currPage);

    $('#prev').click(prevPage);
    $('#next').click(nextPage);

    $('.page').click(function() {
        if($(this).hasClass('flipped')) {
            console.log('next');
            prevPage();
        } else {
            console.log('prev');
            nextPage();
        }
    });
});