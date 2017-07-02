#version 330 core

in vec4 frontColor;
in vec2 vtexCoord;
out vec4 fragColor;

uniform int nstripes = 16;
uniform vec2 origin = vec2(0,0);

void main()
{
    float v = distance(vtexCoord,origin) * 16;
    if ( mod(v, 2 * (1 / nstripes)) < 1/nstripes ) {
        fragColor = vec4(1,0,0,1);
    }
    else {
        fragColor = vec4(1,1,0,1);
    }
}
